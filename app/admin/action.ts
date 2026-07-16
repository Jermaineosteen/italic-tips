"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";

export async function createPrediction(formData: FormData) {
    const supabase = await createClient();

    const {data: { user },} = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const { error } = await supabase
        .from("predictions")
        .insert({
            match_name: formData.get("match_name"),
            country: formData.get("country"),
            prediction: formData.get("prediction"),
            category: formData.get("category"),
            kickoff_time: formData.get("kickoff_time"),
            featured: formData.get("featured") === "on",
            status: formData.get("status"),
        })
        .select();


    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateStatus(id:string, status: string) {
    const supabase = await createClient();

    const { data : { user }} = await supabase.auth.getUser();
    if (!user) {
        throw new Error("Unauthorized");
    }

    // Pending stays in prediciton
    if (status === "pending") {
        await supabase
            .from("predictions")
            .update({ status })
            .eq("id", id);

        revalidatePath("/");
        revalidatePath("/admin");

        return;
    }
    
    // Get prediction
    const {data: prediction, error} = await supabase
        .from("predictions")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !prediction) {
        throw new Error("Predicition not found");
    }

    // Save into results
    const { error: resultError } = await supabase
        .from("results")
        .insert({
            match_name: prediction.match_name,
            country: prediction.country,
            prediction: prediction.prediction,
            category: prediction.category,
            kickoff_time: prediction.kickoff_time,
            status
        });
    
    if (resultError) {
        throw new Error(resultError.message);
    }

    // Remove from predictions
    const { error: deleteError } = await supabase
        .from("predictions")
        .delete()
        .eq("id", id);

    if (deleteError) {
        throw new Error(deleteError.message);
    }

    revalidatePath("/");
    revalidatePath("/history");
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
            country: formData.get("country"),
            prediction: formData.get("prediction"),
            category: formData.get("category"),
            featured: formData.get("featured") === "on",
            kickoff_time: formData.get("kickoff_time"),
            status: formData.get("status"),
        })
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateSettings(formData: FormData) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const { data: settings } = await supabase
        .from("settings")
        .select("id")
        .single();

    const { error } = await supabase
        .from("settings")
        .update({
            site_title: formData.get("site_title"),
            hero_title: formData.get("hero_title"),
            hero_subtitle: formData.get("hero_subtitle"),
            telegram_url: formData.get("telegram_url"),
        })
        .eq("id", settings?.id);

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function deleteAllPredictions() {
    const supabase = await createClient();

    const { data: { user }, } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const { error } = await supabase
        .from("predictions")
        .delete()
        .neq("id", 0);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("history");
    revalidatePath("/admin");
}

export async function deleteAllResult() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized")
    }
    
    const { error } = await supabase
        .from("results")
        .delete()
        .neq("id", "");

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/history")
    revalidatePath("/admin");
}