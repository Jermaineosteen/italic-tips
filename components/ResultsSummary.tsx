import Link from "next/link";
import Advertisement from "./Advertisement";

export default function ResultsSummary({
    won, lost, voided
}: {won: number, lost: number, voided: number}) {
    
    const total = won + lost + voided;

    const winRate = won + lost > 0 ? Math.round((won / (won + lost)) * 100) : 0;

    return (
        <section className="bg-slate-50 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="rounded-3xl bg-white border shadow-sm p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">
                            📊 Our Performance
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Our track record is fully transparent. Review our settled predictions and see how we've performed.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="rounded-2xl bg-emerald-50 p-6 text-center">
                            <p className="text-sm text-slate-500">
                                🏆 Win Rate
                            </p>

                            <p className="mt-2 text-3xl font-black text-emerald-600">
                                {winRate}%
                            </p>
                        </div>

                        <div className="rounded-2xl bg-green-50 p-6 text-center">
                            <p className="text-sm text-slate-500">
                                ✅ Won
                            </p>

                            <p className="mt-2 text-3xl font-black text-green-600">
                                {won}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-red-50 p-6 text-center">
                            <p className="text-sm text-slate-500">
                                ❌ Lost
                            </p>

                            <p className="mt-2 text-3xl font-black text-red-600">
                                {lost}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-cyan-50 p-6 text-center">
                            <p className="text-sm text-slate-500">
                                📈 Settled
                            </p>

                            <p className="mt-2 text-3xl font-black text-cyan-600">
                                {total}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/history"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 transition"
                        >
                            View Full Results
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}