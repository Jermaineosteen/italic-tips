"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";

export async function createPrediction(formData: FormData) {
    const supabase = await createClient();

    const {data: { user },} = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const { data, error } = await supabase
        .from("predictions")
        .insert({
            match_name: formData.get("match_name"),
            market: formData.get("market"),
            prediction: formData.get("prediction"),
            odds: Number(formData.get("odds")),
            category: formData.get("category"),
            kickoff_time: formData.get("kickoff_time"),
            featured: formData.get("featured") === "on",
            status: formData.get("status"),
        })
        .select();


    if (error) {
        throw new Error(error.message);
        console.log(error);
    }

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateStatus(id:string, status: string) {
    const supabase = await createClient();

    await supabase
        .from("predictions")
        .update({ status })
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function deletePrediction(id: string) {
    const supabase = await createClient();

    await supabase
        .from("predictions")
        .delete()
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function toggleFeatured(id: string, featured: boolean) {
    const supabase = await createClient();

    const { data: { user }, } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    await supabase
        .from("predictions")
        .update({ featured: !featured, })
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updatePrediction(formData: FormData) {
    const supabase = await createClient();

    const id = formData.get("id") as string;

    const { data: { user }, } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    await supabase
        .from("predictions")
        .update({
            match_name: formData.get("match_name"),
            market: formData.get("market"),
            prediction: formData.get("prediction"),
            odds: Number(formData.get("odds")),
            kickoff_time: formData.get("kickoff_time"),
            status: formData.get("status"),
        })
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateSettings(formData: FormData) {
    const supabase = await createClient();

    const { data: { user },} = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const { data: settings } = 
        await supabase
            .from("settings")
            .select("id")
            .single();

    await supabase
        .from("settings")
        .update({
            settings: formData.get("site_title"),
            hero_title: formData.get("hero_title"),
            hero_subtitle: formData.get("hero_subtitle"),
            telegram_url: formData.get("telegram_url"),
        })
        .eq("id", settings?.id);

    revalidatePath("/");
    revalidatePath("/admin");
}