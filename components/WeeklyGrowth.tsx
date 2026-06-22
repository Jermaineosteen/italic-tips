import type { DailyStat } from "@/types/daily-stat";

type Props = {
    stats: DailyStat[];
};

export default function WeeklyGrowth({stats}: Props) {
    return (
        <div className="border rounded-xl p-5">
            <h2 className="text-xl font-bold mb-4">
                Last 7 Days
            </h2>

            <div className="space-y-3">
                {stats.map((day) => (
                    <div
                        key={day.stat_date}
                        className="flex justify-between"
                    >
                        <span>
                            👥 {day.visitors}
                            {" | "}
                            📲 {day.telegram_clicks}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}