import { NextRequest } from "next/server";

import { createClient } from "../../../lib/supabase/server";

export async function POST(
    request: NextRequest
) {
    const { visitorId } = await request.json();

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

    // const { data: stat } = 
    //     await supabase 
    //         .from("daily_stats")
    //         .select("*")
    //         .eq("stat_date", today)
    //         .maybeSingle();


    // if (!stat) {
    //     await supabase
    //         .from("daily_stats")
    //         .insert({
    //             stat_date: today,
    //             visitors: 1,
    //             telegram_clicks: 0,
    //         });
    // } else {
    //     await supabase
    //         .from("daily_stats")
    //         .update({
    //             visitors: stat.visitors + 1,
    //         })
    //         .eq("id", stat.id);
    // }

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