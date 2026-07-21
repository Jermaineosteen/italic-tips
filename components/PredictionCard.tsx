import { Prediction } from "@/types/prediction";
import CategoryBadge from "./CategoryBadge";
import SharePrediction from "./SharePrediction";

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

export default function PredictionCard({
  prediction,
}: {
  prediction: Prediction;
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <CardHeader className="pb-3">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-semibold text-slate-900">
              {prediction.match_name}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {prediction.country}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <SharePrediction prediction={prediction} />

            {prediction.featured && (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm">
                ⭐
              </div>
            )}
          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-4">

        <div className="flex items-center justify-between">

          <CategoryBadge
            category={prediction.category}
          />

          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
              prediction.status === "won"
                ? "bg-green-500 text-white"
                : prediction.status === "lost"
                ? "bg-red-100 text-red-700"
                : prediction.status === "void"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {prediction.status}
          </span>

        </div>

        <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-3">

          <p className="font-semibold text-slate-900">
            {prediction.prediction}
          </p>

        </div>

      </CardContent>

    </Card>
  );
}