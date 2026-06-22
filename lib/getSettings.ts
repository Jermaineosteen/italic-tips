import { createClient } from "./supabase/server";

export async function getSettings() {
    const supabase = await createClient();

    const { data } = 
        await supabase
            .from("settings")
            .select("*")
            .single();

    return data;
}