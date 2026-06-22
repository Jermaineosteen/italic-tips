"use server";

import { createClient } from "@/lib/supabase/server";

export async function trackEvent(
    eventType: string,
    predictionId?: string
) {
    const supabase = await createClient();

    await supabase
        .from("analytics")
        .insert({
            event_type: eventType,
            prediction_id: predictionId || null
        });
}