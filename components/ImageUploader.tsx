"use client";

import { useState } from "react";

export default function ImageUploader({
    onUpload
}: {
    onUpload: (url: string) => void;
}) {
    const [ uploading, setUploading ] = useState(false);
    const [ preview, setPreview ] = useState("");

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (!file) return;

        setPreview(URL.createObjectURL(file));
        setUploading(true);

        const formData = new FormData();

        formData.append("file", file);

        const response = await fetch("/api/upload-ad", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        console.log("upload response", data);
        setUploading(false);
        onUpload(data.url ?? "");
    }

    return (
        <div className="space-y-4">
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="rounded-2xl w-full h-48 object-cover border"
                />
            )}

            <label className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition">
                <span className="text-5xl">🖼️</span>
                <p className="mt-3 font-semibold">
                    Tap to upload banner
                </p>

                <p className="text-sm text-slate-500">PNG, JPG or WEBP</p>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleChange}
                />
            </label>

            {uploading && (
                <p className="text-emerald-600 font-medium">
                    Uploading...
                </p>
            )}
        </div>
    )
}