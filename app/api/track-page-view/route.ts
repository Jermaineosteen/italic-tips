import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function POST() {
    const supabase = await createClient();

    await supabase
        .from("analytics")
        .insert({ event_type: "page_view" });

    return NextResponse.json({
        success: true
    });
}