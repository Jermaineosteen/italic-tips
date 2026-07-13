"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToPredictions() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const page = searchParams.get("page");

        // Only scroll when changing pages
        if (!page) return;

        requestAnimationFrame(() => {
            const section = document.getElementById("predictions");

            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        })
    }, [searchParams])

    return null;
}