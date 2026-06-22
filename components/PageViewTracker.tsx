"use client";

import { useEffect } from "react";

export default function PageViewTracker() {
    useEffect(() => {
        fetch("/api/track-page-view", { method: "POST" });
    }, []);

    return null;
}