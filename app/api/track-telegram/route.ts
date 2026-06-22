import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
    const supabase = await createClient();

    const { visitorId } = await request.json();

    if (!visitorId) {
        return NextResponse.json(
            {
                error: "visitorId is required",
            },
            {
                status: 400
            }
        )
    }

    await supabase
    .from("analytics")
    .insert({
        event_type:
        "telegram_click",

        visitor_id:
        visitorId,
    });

    const today = new Date().toISOString().split('T')[0];

    await supabase.rpc(
        "increment_daily_telegram_clicks",
        {
            target_date: today
        }
    )

    // const { data: stat } = 
    //     await supabase
    //         .from("daily_stats")
    //         .select("*")
    //         .eq("stat_date", today)
    //         .maybeSingle();

    // // if (!stat) {
    //     await supabase
    //         .from("daily_stats")
    //         .insert({
    //             stat_date: today,
    //             visitors: 0,
    //             telegram_clicks: 1
    //         })
    // } else {
    //     await supabase
    //         .from("daily_stats")
    //         .update({
    //             telegram_clicks: stat.telegram_clicks + 1
    //         })
    //         .eq("id", stat.id);
    // }

    return NextResponse.json({
        success: true
    })
}