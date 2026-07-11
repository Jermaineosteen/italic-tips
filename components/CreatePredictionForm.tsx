import { createPrediction } from "../app/admin/action";

export default function CreatePredictionForm() {
    return (
        <form
            action={createPrediction}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 space-y-4"
        >
            <h2 className="text-2xl font-bold">
                Create Prediction
            </h2>

            <select
                name="category"
                className="w-full border p43 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
            >
                <option value="football">
                    Football
                </option>

                <option value="basketball">
                    Basketball
                </option>

                <option value="tennis">
                    Tennis
                </option>
            </select>

            <input
                name="country"
                placeholder="Country"
                required
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />
            <input
                name="match_name"
                placeholder="Arsenal vs Chelsea"
                required
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />

            <input
                name="prediction"
                placeholder="Over 2.5 Goals"
                required
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />


            <input
                type="datetime-local"
                name="kickoff_time"
                required
                placeholder="Kickoff Time"
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />

            <select name="status" className="w-full border p43 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none">
                <option value="pending">
                    Pending
                </option>

                <option value="won">
                    Won
                </option>

                <option value="lost">
                    Lost
                </option>

                <option value="void">
                    Void
                </option>
            </select>

            <label className="flex gap-2">
                <input type="checkbox" name="featured" />
                Featured Pick
            </label>

            <button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white shadow-lg shadow-emerald-500/25"
            >
                Create Prediction
            </button>
        </form>
    )
}