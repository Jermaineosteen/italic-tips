import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "../../../../lib/supabase/server";
import { updatePrediction } from "../../action";

export default async function EditPrediction({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: prediction } = await supabase
    .from("predictions")
    .select("*")
    .eq("id", id)
    .single();

  if (!prediction) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto p-4 md:p-6">

        <Link
          href="/admin"
          className="
            inline-flex
            items-center
            gap-2
            mb-6
            text-emerald-600
            font-medium
          "
        >
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <h1 className="text-3xl font-bold mb-6">
            Edit Prediction
          </h1>

          <form
            action={updatePrediction}
            className="space-y-4"
          >
            <input
              type="hidden"
              name="id"
              value={prediction.id}
            />

            <input
              name="match_name"
              defaultValue={prediction.match_name}
              placeholder="Match Name"
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            />

            <input
              name="market"
              defaultValue={prediction.market}
              placeholder="Market"
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            />

            <input
              name="prediction"
              defaultValue={prediction.prediction}
              placeholder="Prediction"
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            />

            <input
              type="number"
              step="0.01"
              name="odds"
              defaultValue={prediction.odds}
              placeholder="Odds"
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            />

            <input
              type="datetime-local"
              name="kickoff_time"
              defaultValue={prediction.kickoff_time?.slice(0, 16)}
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            />

            <select
              name="category"
              defaultValue={prediction.category}
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            >
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
            </select>

            <select
              name="status"
              defaultValue={prediction.status}
              className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50"
            >
              <option value="pending">Pending</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
              <option value="void">Void</option>
            </select>

            <label className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={prediction.featured}
              />
              Featured Pick
            </label>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-emerald-500
                to-cyan-500
                text-white
                font-bold
                shadow-lg
                shadow-emerald-500/25
              "
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}