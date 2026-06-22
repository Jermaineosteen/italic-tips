"use client"

import { useRouter } from "next/navigation";

export default function CategoryFilter({current}: { current: string; }) {
    const router = useRouter();

    return (
        <select
            value={current}
            onChange={(e) => router.push(`/?category=${e.target.value}`, {scroll: false})}
            className="border p-3 rounded"
        >
            <option value="all">
                All Sports
            </option>

            <option value="football">
                Football
            </option>

            <option value="basketball">
                Basketball
            </option>

            <option value="tennis">
                Tennis
            </option>
        </select>
    )
}