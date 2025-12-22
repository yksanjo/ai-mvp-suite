"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

export default function AnalyzeDealPage() {
  const router = useRouter();
  const params = useParams();
  const dealId = params.id as string;
  const [inputType, setInputType] = useState<"meeting" | "email" | "notes">("notes");
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputData.trim()) {
      setError("Please provide some input data");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deal_id: dealId,
          input_type: inputType,
          input_data: inputData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Analysis failed");
      }

      const result = await response.json();
      router.push(`/dashboard/deals/${dealId}/analysis/${result.analysis_id}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">DealPulse</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Analyze Deal</CardTitle>
            <CardDescription>
              Upload meeting recordings, paste email threads, or input deal notes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input_type">Input Type</Label>
                <Select
                  value={inputType}
                  onValueChange={(value: "meeting" | "email" | "notes") =>
                    setInputType(value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meeting">Meeting Recording/Notes</SelectItem>
                    <SelectItem value="email">Email Thread</SelectItem>
                    <SelectItem value="notes">Deal Notes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="input_data">
                  {inputType === "meeting"
                    ? "Meeting Notes or Transcript"
                    : inputType === "email"
                    ? "Email Thread"
                    : "Deal Notes"}
                </Label>
                <Textarea
                  id="input_data"
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  placeholder={
                    inputType === "meeting"
                      ? "Paste meeting notes or transcript here..."
                      : inputType === "email"
                      ? "Paste email thread here..."
                      : "Enter your deal notes here..."
                  }
                  rows={10}
                  required
                />
              </div>
              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                  {error}
                </div>
              )}
              <div className="flex gap-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Deal"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

