import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

export default async function DealDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: deal, error } = await supabase
    .from("deals")
    .select("*")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single();

  if (error || !deal) {
    redirect("/dashboard");
  }

  const { data: analyses } = await supabase
    .from("analyses")
    .select("*")
    .eq("deal_id", params.id)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">DealPulse</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h2 className="text-3xl font-bold">{deal.deal_name}</h2>
            <p className="text-gray-600">{deal.company_name}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">
                Deal Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {deal.deal_value
                  ? `$${deal.deal_value.toLocaleString()}`
                  : "Not set"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">
                Stage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{deal.stage}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">
                Created
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                {format(new Date(deal.created_at), "MMM d, yyyy")}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <Link href={`/dashboard/deals/${params.id}/analyze`}>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Analysis
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Analyses</CardTitle>
            <CardDescription>
              All AI-powered analyses for this deal
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analyses && analyses.length > 0 ? (
              <div className="space-y-4">
                {analyses.map((analysis) => (
                  <Link
                    key={analysis.id}
                    href={`/dashboard/deals/${params.id}/analysis/${analysis.id}`}
                  >
                    <Card className="hover:bg-gray-50 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`text-2xl font-bold ${
                                  analysis.risk_score >= 70
                                    ? "text-green-600"
                                    : analysis.risk_score >= 40
                                    ? "text-yellow-600"
                                    : "text-red-600"
                                }`}
                              >
                                {analysis.risk_score}
                              </span>
                              <span className="text-sm text-gray-600">
                                Risk Score
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {analysis.executive_summary}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {format(
                                new Date(analysis.created_at),
                                "MMM d, yyyy 'at' h:mm a"
                              )}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No analyses yet</p>
                <Link href={`/dashboard/deals/${params.id}/analyze`}>
                  <Button>Create First Analysis</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

