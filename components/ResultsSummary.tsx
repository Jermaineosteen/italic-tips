export default function ResultsSummary({
    won, lost, voided
}: {won: number, lost: number, voided: number}) {
    
    const total = won + lost + voided;

    const winRate = total > 0 ? Math.round((won/total) * 100) : 0;

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">
                    Recent Results
                </h2>

                <div className="grid md:grid-cols-4 gap-4">
                    <div className="border rounded-xl p-5">
                        <p>Won</p>
                        <h3 className="text-3xl font-bold">
                            {won}
                        </h3>
                    </div>

                    <div className="border rounded-xl p-5">
                        <p>Lost</p>
                        <h3 className="text-3xl font-bold">
                            {lost}
                        </h3>
                    </div>

                    <div className="border rounded-xl p-5">
                        <p>Void</p>
                        <h3 className="text-3xl font-bold">
                            {voided}
                        </h3>
                    </div>

                    <div className="border rounded-xl p-5">
                        <p>Win Rate</p>
                        <h3 className="text-3xl font-bold">
                            {winRate}%
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}