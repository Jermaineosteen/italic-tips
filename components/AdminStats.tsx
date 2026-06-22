export default function AdminStats({
    total, won, lost, pending, winRate}: { total: number, won: number, lost: number, pending: number, winRate: number}) {
        const cards = [
            ["Total", total],
            ["Won", won],
            ["Lost", lost],
            ["Pending", pending],
            ["Win Rate", `${winRate}%`],
        ]
        return (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {cards.map(([label, value]) => (
                    <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                        <p className="text-gray-500">
                            {label}
                        </p>

                        <h2 className="text-3xl font-bold">
                            {value}
                        </h2>
                    </div>
                ))}
            </div>
        )
    }