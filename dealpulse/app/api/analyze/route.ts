import { createClient } from "@/lib/supabase/server";
import { analyzeDeal } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { deal_id, input_type, input_data } = body;

    if (!deal_id || !input_type || !input_data) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify deal belongs to user
    const { data: deal, error: dealError } = await supabase
      .from("deals")
      .select("id")
      .eq("id", deal_id)
      .eq("user_id", user.id)
      .single();

    if (dealError || !deal) {
      return NextResponse.json({ error: "Deal not found" }, { status: 404 });
    }

    // Run AI analysis
    const analysis = await analyzeDeal(input_type, input_data);

    // Save analysis to database
    const { data: savedAnalysis, error: saveError } = await supabase
      .from("analyses")
      .insert({
        user_id: user.id,
        deal_id: deal_id,
        input_type: input_type,
        input_data: input_data,
        risk_score: analysis.riskScore,
        next_actions: JSON.stringify(analysis.nextActions),
        stakeholder_map: JSON.stringify(analysis.stakeholderMap),
        follow_up_draft: analysis.followUpDraft,
        executive_summary: analysis.executiveSummary,
      })
      .select()
      .single();

    if (saveError) {
      console.error("Error saving analysis:", saveError);
      return NextResponse.json(
        { error: "Failed to save analysis" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      analysis_id: savedAnalysis.id,
      analysis,
    });
  } catch (error: any) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: error.message || "Analysis failed" },
      { status: 500 }
    );
  }
}

