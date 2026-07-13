import { NextRequest } from "next/server";

import { createClient } from "../../../lib/supabase/server";

export async function POST(
    request: NextRequest
) {
    let visitorId: string | undefined;

    try {
        const body = await request.json();
        visitorId = body?.visitorId;
    } catch (error) {
        visitorId = undefined;
    }

    if (!visitorId) {
        return Response.json(
            { error: "Missing visitorId" },
            { status: 400 }
        );
    }

    const supabase = await createClient();

    const today = new Date().toISOString().split("T")[0];

    await supabase.rpc(
        "increment_daily_visitors",
        {
            target_date: today
        }
    )

    const start = `${today}T00:00:00`;

    const end = `${today}T23:59:59`;

    const { data: existing } = 
        await supabase
            .from("analytics")
            .select("id")
            .eq("visitor_id", visitorId)
            .eq("event_type", "unique_visit")
            .gte("created_at", start)
            .lte("created_at", end)
            .maybeSingle();

    if (!existing) {
        await supabase
            .from("analytics")
            .insert({ event_type: "unique_visit", visitor_id: visitorId });
    }

    return Response.json({ success: true });
}