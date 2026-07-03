"use client"

import { useEffect } from "react"

export default function VisitorTracker() {
    useEffect(() => {
        async function trackVisitor() {
            let visitorId = localStorage.getItem("italic_tips_visitor");

            if (!visitorId) {
                visitorId = crypto.randomUUID();
                localStorage.setItem("italic_tips_visitor", visitorId);
            }

            try {
                await fetch("/api/track-visitor", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ visitorId }),
                })
            } catch (err) {
                console.error("Error tracking visitor:", err);
            }
        }

        trackVisitor();
    }, []);

    return null;
}