import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
    const supabase = await createClient();
    let visitorId: string | null = null;
    try {
        const body = await request.json();
        visitorId = body.visitorId;
    } catch {
        return NextResponse.json(
        {error: 'Invalid JSON body'},
        {status: 400}
        );
    }

    if (!visitorId) {
        return NextResponse.json(
            {error: "visitorId is required",},
            {status: 400}
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

    return NextResponse.json({
        success: true
    })
}