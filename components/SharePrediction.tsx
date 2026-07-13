"use client"

import { Prediction } from "@/types/prediction";
import { Share } from "next/font/google";
import { ShareIcon } from "@heroicons/react/24/outline";

interface SharePredictionProps {
    prediction: Prediction;
}
export default function SharePrediction({prediction}: SharePredictionProps) {
    async function share() {
        const text = `
        ⚽ ${prediction.match_name}

        🌍 ${prediction.country}

        🎯 ${prediction.prediction}

        #ItalicTips`;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: prediction.match_name,
                    text,
                    url: window.location.origin
                });
            } else {
                await navigator.clipboard.writeText(text);
                alert("Prediction copied!");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button
            onClick={share}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition"
            title="Share Prediction"
        >
            <ShareIcon className="h-5 w-5 text-slate-600"/>
        </button>
    )
}