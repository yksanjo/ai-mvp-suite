import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, TrendingUp, Users, AlertCircle } from "lucide-react";

export default async function AnalysisPage({
  params,
}: {
  params: { id: string; analysisId: string };
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: analysis, error } = await supabase
    .from("analyses")
    .select("*")
    .eq("id", params.analysisId)
    .eq("user_id", user.id)
    .single();

  if (error || !analysis) {
    redirect("/dashboard");
  }

  const { data: deal } = await supabase
    .from("deals")
    .select("*")
    .eq("id", params.id)
    .single();

  const nextActions = JSON.parse(analysis.next_actions || "[]");
  const stakeholderMap = JSON.parse(analysis.stakeholder_map || "[]");

  const getRiskColor = (score: number) => {
    if (score >= 70) return "text-green-600 bg-green-50";
    if (score >= 40) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const handleExportPDF = () => {
    // PDF export functionality would go here
    alert("PDF export coming soon!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">DealPulse</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Analysis: {deal?.deal_name}
          </h2>
          <p className="text-gray-600">{deal?.company_name}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Risk Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`text-5xl font-bold mb-2 p-4 rounded-lg text-center ${getRiskColor(
                  analysis.risk_score
                )}`}
              >
                {analysis.risk_score}
              </div>
              <p className="text-sm text-gray-600 text-center">
                {analysis.risk_score >= 70
                  ? "High probability of closing"
                  : analysis.risk_score >= 40
                  ? "Moderate risk"
                  : "High risk - needs attention"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{analysis.executive_summary}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Next Actions
            </CardTitle>
            <CardDescription>Prioritized steps to move this deal forward</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {nextActions.map((action: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="flex-1">{action}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {stakeholderMap.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Stakeholder Map
              </CardTitle>
              <CardDescription>Key players and their concerns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stakeholderMap.map((stakeholder: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{stakeholder.name}</h4>
                      <span className="text-xs px-2 py-1 rounded bg-gray-100">
                        {stakeholder.role}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          stakeholder.influence === "high"
                            ? "bg-red-100 text-red-700"
                            : stakeholder.influence === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {stakeholder.influence} influence
                      </span>
                    </div>
                    {stakeholder.concerns && stakeholder.concerns.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Concerns:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {stakeholder.concerns.map((concern: string, i: number) => (
                            <li key={i}>{concern}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Follow-up Email Draft
            </CardTitle>
            <CardDescription>Personalized email ready to send</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded border">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                {analysis.follow_up_draft}
              </pre>
            </div>
            <Button className="mt-4" variant="outline">
              Copy to Clipboard
            </Button>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={handleExportPDF}>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
          >
            Back to Deal
          </Button>
        </div>
      </main>
    </div>
  );
}

