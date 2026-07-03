import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
    const supabase = await createClient();

    const { data: {user} } = await supabase.auth.getUser();

    if (!user) {
        return NextResponse.json(
            {error: "Unauthorized"},
            { status: 401 }
        );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return NextResponse.json(
            {error: "No file uploaded"},
            { status: 400 }
        );
    }

    const extension = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${extension}`;

    const { error } = await supabase.storage
        .from("advertisements")
        .upload(fileName, file);

    if (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }

    const { data: { publicUrl } } = await supabase.storage
        .from("advertisements")
        .getPublicUrl(fileName)

    return NextResponse.json({url: publicUrl});
}