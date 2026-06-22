"use client"

import { useEffect, useState } from "react"

export default function InstallAppBanner() {
    const [prompt, setPrompt] = useState<any>(null);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();

            setPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    if (!prompt) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded-xl">
            <div className="flex justify-between">
                <span>
                    Install Italic Tips
                </span>

                <button
                    onClick={async () => {
                        prompt.prompt();
                        await prompt.userChoice;
                    }}
                >
                    Install
                </button>
            </div>
        </div>
    )
}