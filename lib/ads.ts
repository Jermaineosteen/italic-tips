import { createClient } from "./supabase/server";

export async function getAdvertisement(position: string) {
    const supabase = await createClient();

    const now = new Date().toISOString();

    const { data, error } = await supabase
        .from("advertisements")
        .select("*")
        .eq("active", true)
        .eq("position", position)
        .order("priority")
        .limit(1)
        .maybeSingle();

        // .or(`start_date.is.null,start_date.lte.${now}`)
        // .or(`end_date.is.null,end_date.gte.${now}`)
    return data;
}