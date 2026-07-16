import { Prediction } from "@/types/prediction";
import CategoryBadge from "./CategoryBadge";
import SharePrediction from "./SharePrediction";

export default function PredictionCard({
  prediction,
}: {
  prediction: Prediction;
}) {
  return (
    <div
      className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-slate-900 leading-tight">
            {prediction.match_name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {prediction.country}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <SharePrediction prediction={prediction} />

          {prediction.featured && (
            <div className="h-7 w-7 rounded-full bg-amber-100 flex items-center justify-center text-sm">
              ⭐
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <CategoryBadge
          category={prediction.category}
        />

        <span
          className={`
          px-2.5
          py-1
          rounded-full
          font-semibold
          text-xs
          capitalize
          ${
            prediction.status === "won"
              ? "bg-green-500 text-white"
              : prediction.status === "lost"
              ? "bg-red-100 text-red-700"
              : prediction.status === "void"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-slate-100 text-slate-700"
          }
          `}
        >
          {prediction.status}
        </span>
      </div>

      <div
        className="
        mt-3
        rounded-xl
        bg-gradient-to-r
        from-emerald-50
        to-cyan-50
        p-3
        "
      >
        <p
          className="
          text-base
          font-bold
          text-slate-900
          "
        >
          {prediction.prediction}
        </p>
      </div>
    </div>
  );
}