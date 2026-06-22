"use client"

import TelegramButton from "./TelegramButton";

export default function StickyTelegramBar({
    telegramUrl
}: { telegramUrl: string;}) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 md:hidden">
            <TelegramButton url={telegramUrl}/>
        </div>
    );
}