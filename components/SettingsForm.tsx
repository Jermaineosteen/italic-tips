import { updateSettings } from "@/app/admin/action";
import type { Settings } from "@/types/settings";


type Props = {
    settings: Settings;
}
export default function SettingsForm({
    settings,
}: Props) {
    return (
        <form 
            action={updateSettings}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 space-y-4"    
        >
            <h2 className="text-2xl font-bold">
                Site Settings
            </h2>

            <input
                name="site_title"
                defaultValue={settings.site_title}
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />

            <input
                name="hero_title"
                defaultValue={settings.hero_title}
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />

            <input
                name="hero_subtitle"
                defaultValue={settings.hero_subtitle}
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />

            <input
                name="telegram_url"
                defaultValue={settings.telegram_url}
                className="w-full border p-4 rounded-xl border-slate-300 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-200 outline-none"
            />

            <button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white shadow-lg shadow-emerald-500/25"
            >
                Save Settings
            </button>
        </form>
    )
}