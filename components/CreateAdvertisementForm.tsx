"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { createAdvertisement } from "@/app/actions/advertisement";

export default function CreateAdvertisementForm () {
    const [ imageUrl, setImageUrl ] = useState("");

    return (
        <form 
            action={createAdvertisement}
            className="bg-white rounded-3xl shadow border p-6 space-y4"
        >
            <h2 className="text-2xl font-bold">
                Create Advertisement
            </h2>

            <input
                name="title"
                required
                placeholder="Betway Banner"
                className="w-full rounded-xl border p-4"
            />

            <ImageUploader onUpload={(url) => setImageUrl(url)}/>
            
            <input 
                type="hidden"
                name="image_url"
                value={imageUrl ?? ""} 
            />

            <input
                name="target_url"
                required
                placeholder="https://betway.com"
                className="w-full rounded-xl border p-4"
            />

            <select 
                name="position"
                className="w-full rounded-xl border p-4"    
            >
                <option value="hero">Hero</option>
                <option value="homepage">Homepage</option>
                <option value="between_predictions">Between Predictions</option>
                <option value="history">History Page</option>
                <option value="before_footer">Footer</option>
            </select>

            <input
                type="number"
                name="priority"
                defaultValue={1}
                className="w-full rounded-xl border p-4"
            />

            <input
                type="datetime-local"
                name="start_date"
                className="w-full rounded-xl border p-4"
            />

            <input
                type="datetime-local"
                name="end_date"
                className="w-full rounded-xl border p-4"
            />

            <label className="flex items-center gap-3">
                <input 
                    type="checkbox" 
                    name="active"
                    defaultChecked    
                />

                Active Advertisement
            </label>

            <button
                className="w-full rounded-xl py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold"
            >
                Create Advertisement
            </button>
        </form>
    )
}