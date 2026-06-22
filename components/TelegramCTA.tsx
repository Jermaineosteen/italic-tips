import Link from "next/link";
import TelegramButton from "./TelegramButton";

export default function TelegramCTA() {
    return (
        <section className="py-16">
            <div
                className="max-w-5xl mx-auto px-6 py-12 bg-black text-white rounded-2xl text-center"
            >
                <h2 className="text-4xl font-bold">
                    Want More Daily Tips?
                </h2>

                <p className="mt-4 opacity-80">
                    Join our Telegram channel
                    for daily predictions and
                    betting insights.
                </p>

                <div className="hidden md:block">
                    <TelegramButton url="https://t.me/magictpx"/>
                </div>
            </div>
        </section>
    )
}