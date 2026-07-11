"use client"

import { Prediction } from "@/types/prediction";

interface SharePredictionProps {
    prediction: Prediction;
}
export default function SharePrediction({prediction}: SharePredictionProps) {
    async function share() {
        const text = `
        ${prediction.match_name}

        Odds:
        ${prediction.country}

        Prediction:
        ${prediction.prediction}

        Shared from Italic Tips
        `;

        try {
            if (navigator.share) {
                await navigator.share({text});
            } else {
                await navigator.clipboard.writeText(text);
                alert("Copied to clipboard");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button
            onClick={share}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium shadow-md shadow-emerald-500/20 transition-all duration-200 hover:scale-105 active:scale-95"
        >
            <span>📤</span>
            <span>Share</span>
        </button>
    )
}