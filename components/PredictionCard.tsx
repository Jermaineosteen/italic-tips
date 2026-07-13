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
      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className="text-lg font-bold text-slate-900"
          >
            {prediction.match_name}
          </h3>

          <p
            className="mt-2 text-smtext-slate-500"
          >
            {prediction.country}
          </p>
        </div>

        {prediction.featured && (
          <div
            className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center"
          >
            ⭐
          </div>
        )}
      </div>

      <div className="mt-4">
        <CategoryBadge
          category={prediction.category}
        />
      </div>

      <div
        className="
        mt-5
        rounded-xl
        bg-gradient-to-r
        from-emerald-50
        to-cyan-50
        p-4
        "
      >
        <p
          className="
          text-lg
          font-bold
          text-slate-900
          "
        >
          {prediction.prediction}
        </p>
      </div>

      <div
        className="
        mt-5
        flex
        items-center
        justify-between
        "
      >

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
          capitalize
          ${
            prediction.status === "won"
              ? "bg-green-100 text-green-700"
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
        mt-5
        pt-4
        border-t
        border-slate-200
        "
      >
        <SharePrediction
          prediction={prediction}
        />
      </div>
    </div>
  );
}