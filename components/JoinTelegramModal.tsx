'use client';

import { useEffect, useState } from "react";
import TelegramButton from "./TelegramButton";

export default function JoinTelegramModal({telegramUrl}: { telegramUrl: string; }) {
    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        const alreadySeen = localStorage.getItem("italic_tips_modal_seen");

        if (alreadySeen) return;

        const handleScroll = () => {
            const scrollPercent = (
                window.scrollY / 
                (
                    document.body.scrollHeight - window.innerHeight
                )
            ) * 100;

            if (scrollPercent > 70) {
                setOpen(true);

                window.removeEventListener("scroll", handleScroll);
            }

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    function closeModal() {
        localStorage.setItem("italic_tips_modal_seen", "true");
        setOpen(false);
    }

    if (!open) return null;

    return (
        <>
            <div className="fixed left-1/2 top-1/2 z-50 w-[90%]  max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl">
                <div className="text-center">
                    <div className="text-5xl mb-4">
                        🔥
                    </div>

                    <h2 className="text-2xl font-bold">
                        Get Daily Winning Tips
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Join our Telegram channel
                        and receive daily football
                        predictions, banker tips,
                        and featured picks.
                    </p>

                    <div className="mt-6">
                        <TelegramButton
                        url={telegramUrl}
                        />
                    </div>


                    <button
                        onClick={closeModal}
                        className="mt-4 text-sm text-gray-500"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </>
    )
}