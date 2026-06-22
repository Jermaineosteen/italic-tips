export default function AnalyticsStats({
    pageViews,
    telegramClicks
}: {
    pageViews: number;
    telegramClicks: number;
}) {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-5 rounded-xl">
                <p>Page Views</p>

                <h2 className="text-4xl font-bold">
                    {pageViews}
                </h2>
            </div>

            <h2 className="text-4xl font-bold">
                <p>Telegram Clicks</p>

                <h2 className="text-4xl font-bold">
                    {telegramClicks}
                </h2>
            </h2>
        </div>
    )
}