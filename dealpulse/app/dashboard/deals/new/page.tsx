"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";

export default function NewDealPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    deal_name: "",
    company_name: "",
    deal_value: "",
    stage: "prospecting",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { error } = await supabase.from("deals").insert({
      user_id: user.id,
      deal_name: formData.deal_name,
      company_name: formData.company_name,
      deal_value: formData.deal_value ? parseFloat(formData.deal_value) : null,
      stage: formData.stage,
    });

    if (error) {
      console.error("Error creating deal:", error);
      alert("Failed to create deal. Please try again.");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">DealPulse</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Create New Deal</CardTitle>
            <CardDescription>Add a new deal to track and analyze</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deal_name">Deal Name</Label>
                <Input
                  id="deal_name"
                  value={formData.deal_name}
                  onChange={(e) =>
                    setFormData({ ...formData, deal_name: e.target.value })
                  }
                  placeholder="e.g., Enterprise Contract Q1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_name">Company Name</Label>
                <Input
                  id="company_name"
                  value={formData.company_name}
                  onChange={(e) =>
                    setFormData({ ...formData, company_name: e.target.value })
                  }
                  placeholder="e.g., Acme Corp"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deal_value">Deal Value ($)</Label>
                <Input
                  id="deal_value"
                  type="number"
                  value={formData.deal_value}
                  onChange={(e) =>
                    setFormData({ ...formData, deal_value: e.target.value })
                  }
                  placeholder="e.g., 50000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage">Stage</Label>
                <Select
                  value={formData.stage}
                  onValueChange={(value) =>
                    setFormData({ ...formData, stage: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prospecting">Prospecting</SelectItem>
                    <SelectItem value="qualification">Qualification</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="negotiation">Negotiation</SelectItem>
                    <SelectItem value="closed-won">Closed Won</SelectItem>
                    <SelectItem value="closed-lost">Closed Lost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? "Creating..." : "Create Deal"}
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

