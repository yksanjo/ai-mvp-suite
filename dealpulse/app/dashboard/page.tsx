import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, TrendingUp, FileText, Users } from "lucide-react";
import { DealList } from "@/components/deal-list";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Get user's deals
  const { data: deals } = await supabase
    .from("deals")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  // Get usage stats
  const { data: analyses } = await supabase
    .from("analyses")
    .select("id")
    .eq("user_id", user.id);

  const analysisCount = analyses?.length || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DealPulse</h1>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-gray-600">{user.email}</span>
            <form action="/api/auth/signout" method="post">
              <Button type="submit" variant="outline">Sign Out</Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
            <p className="text-gray-600">Manage your deals and track insights</p>
          </div>
          <Link href="/dashboard/deals/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Deal
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Total Deals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{deals?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Analyses Run
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{analysisCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Active Deals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {deals?.filter((d) => d.stage !== "closed").length || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Deals</CardTitle>
            <CardDescription>Your latest deal activity</CardDescription>
          </CardHeader>
          <CardContent>
            <DealList deals={deals || []} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

