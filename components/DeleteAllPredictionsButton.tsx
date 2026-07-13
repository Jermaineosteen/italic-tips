"use client";

import { deleteAllPredictions } from "@/app/admin/action";
import { useTransition } from "react";

export default function DeleteAllPredictionsButton({
    total
}: {total: number;}) {
    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        const confirmed = window.confirm(`Delete all ${total} predictions? This action cannot be undone.`);

        if (!confirmed) return;

        startTransition(async () => {
            await deleteAllPredictions();
        })
    }

    return (
        <button
            onClick={handleDelete}
            className="rounded-xl bg-red-600 px-5 py-3 text-white font-semibold shadow hover:bg-red-700 disabled:opacity-50"
        >
            {isPending ? "Deleting..." : `🗑 Delete All (${total})`}
        </button>
    )
}