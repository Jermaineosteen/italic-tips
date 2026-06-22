
export default function GrowthStats({
    visitors,
    telegramClicks,
}: {
    visitors: number;
    telegramClicks: number;
}) {
    const conversionRate = visitors > 0 ? (
        (telegramClicks / visitors) * 100
    ).toFixed(1) : "0";

    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-xl p-5">
                <p>Visitors</p>

                <h2 className="text-3xl font-bold">
                    {visitors}
                </h2>
            </div>

            <div className="border rounded-xl p-5">
                <p>Telegram Clicks</p>

                <h2 className="text-3xl font-bold">
                    {telegramClicks}
                </h2>
            </div>

            <div className="border rounded-xl p-5">
                <p>Conversion Rate</p>

                <h2 className="text-3xl font-bold">
                    {conversionRate}%
                </h2>
            </div>
        </div>
    )
}