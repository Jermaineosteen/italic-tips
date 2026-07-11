import StatusBadge from "./StatusBadge";
import {deletePrediction,toggleFeatured,updateStatus,} from "../app/admin/action";
import Link from "next/link";
import { Prediction } from "@/types/prediction";

interface PredictionTableProps {
    predictions: Prediction[]
}

export default function PredictionTable({predictions}: PredictionTableProps) {
    if (!predictions.length) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center">
        <p className="text-slate-500">
          No predictions available.
        </p>
      </div>
    );
  }
    return (
        <div className="space-y-4">
            {predictions.map((prediction) => (
                <div
                    key={prediction.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">
                                {prediction.match_name}
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                {prediction.country}
                            </p>
                        </div>

                        {prediction.featured && (
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                                ⭐ Featured
                            </span>
                        )}
                    </div>

                    {/* prediction */}
                    <div className="mt-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-4">
                        <p className="font-semibold text-slate-900">
                        {prediction.prediction}
                        </p>
                    </div>

                    {/* odds + status */}
                    <div>
                        <div>
                            <p>
                                Odds
                            </p>

                        </div>

                        <StatusBadge status={prediction.status}/>
                    </div>

                    {/* category + kickoff */}
                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                        <span className="bg-slate-100 px-3 py-1 rounded-full">
                        {prediction.category}
                        </span>

                        <span className="bg-slate-100 px-3 py-1 rounded-full">
                        {new Date(
                            prediction.kickoff_time
                        ).toLocaleString()}
                        </span>
                    </div>

                    {/* edit */}
                    <div className="mt-4">
                        <Link
                        href={`/admin/edit/${prediction.id}`}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium"
                        >
                            Edit Prediction
                        </Link>
                    </div>

                    {/* status buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <form
                            action={async () => {
                                "use server"
                                await updateStatus(prediction.id, "won")
                            }}
                        >
                            <button className="w-full rounded-xl bg-green-100 text-green-700 py-3 font-medium">
                                Won
                            </button>
                        </form>

                        <form
                            action={async () => {
                                "use server"
                                await updateStatus(prediction.id, "lost")
                            }}
                        >
                            <button className="w-full rounded-xl bg-green-100 text-green-700 py-3 font-medium">
                                Lost
                            </button>
                        </form>

                        <form
                            action={async () => {
                                "use server"
                                await updateStatus(prediction.id, "void")
                            }}
                        >
                            <button className="w-full rounded-xl bg-green-100 text-green-700 py-3 font-medium">
                                Void
                            </button>
                        </form>

                        <form
                            action={async () => {
                                "use server"
                                await toggleFeatured(prediction.id, prediction.featured)
                            }}
                        >
                            <button className="w-full rounded-xl bg-blue-100 text-blue-700 py-3 font-medium">
                                {prediction.featured ? "Unfeature" : "Feature"}
                            </button>
                        </form>
                    </div>

                    {/* delete */}
                    <form
                        action={async () => {
                            "use server"
                            await deletePrediction(prediction.id)
                        }}
                        className="mt-3"
                    >
                        <button className="w-full rounded-xl bg-green-100 text-green-700 py-3 font-medium">
                            Delete Prediction
                        </button>
                    </form>
                </div>
            ))}
        </div>
    )
}