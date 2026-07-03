"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createAdvertisement(formData: FormData) {
    const supabase = await createClient();

    const { data: {user}} = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const { error } = await supabase
        .from("advertisements")
        .insert({
            title: formData.get("title"),
            image_url: formData.get("image_url"),
            target_url: formData.get("target_url"),
            position: formData.get("position"),
            priority: Number(formData.get("priority")),
            active: formData.get("active") === "on",
            start_date: formData.get("start_date"),
            end_date: formData.get("end_date"),
        });

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/advertisements");
}

export async function toggleAdvertisement(id: string, active: boolean) {
    const supabase = await createClient();

    await supabase
        .from("advertisements")
        .update({
            active: !active
        })
        .eq("id", id)

    revalidatePath("/admin");
}

export async function deleteAdvertisement(id: string) {
    const supabase = await createClient();

    await supabase
        .from("advertisements")
        .delete()
        .eq("id", id);

    revalidatePath("/admin");
}