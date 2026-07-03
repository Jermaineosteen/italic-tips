import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">
                Contact Us
            </h1>

            <div className="space-y-6 text-slate-700">
                <p>
                    If you have questions, feedback, partnership opportunities, or need
                    assistance, feel free to reach out.
                </p>

                <div className="bg-slate-50 border rounded-2xl p-6">
                    <h2 className="font-bold text-xl mb-3">
                        Telegram
                    </h2>

                    <p>
                        Join our Telegram community for support and updates.
                    </p>

                    <Link
                        href="https://t.me/magictpx"
                        target="_blank"
                        className="text-emerald-600 font-semibold"
                    >
                        https://t.me/magictpx
                    </Link>
                </div>

                <div className="bg-slate-50 border rounded-2xl p-6">
                    <h2 className="font-bold text-xl mb-3">
                        Business Enquiries
                    </h2>

                    <p>
                        For advertising, sponsorships, or partnerships, please contact us
                        through Telegram.
                    </p>
                </div>
            </div>
        </div>
    )
}