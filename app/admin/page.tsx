import { redirect } from "next/navigation";

import { createClient } from "../../lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";

import PredictionTable from "@/components/PredictionTable";
import CreatePredictionForm from "@/components/CreatePredictionForm";
import SettingsForm from "@/components/SettingsForm";
import GrowthStats from "@/components/GrowthStats";
import WeeklyGrowth from "@/components/WeeklyGrowth";
import AdminStats from "@/components/AdminStats";
import Link from "next/link";

export default async function AdminPage() {
    const supabase = await createClient();

    const { data: { user}, } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    if (
        user.email !==
        "admin@italictips.com"
    ) {
        redirect("/admin/login");
    }

    const { data: predictions } = await supabase
        .from("predictions")
        .select("*")
        .order("created_at", { ascending: false });

    const { data: settings } = 
        await supabase
            .from("settings")
            .select("*")
            .single();

    const { data: analytics } = 
        await supabase
            .from("analytics")
            .select("*")

    const today = new Date().toISOString().split('T')[0];

    const { data: todayStats } = 
        await supabase
            .from("daily_stats")
            .select("*")
            .eq("stat_date", today)
            .maybeSingle();

    const pageViews = analytics?.
        filter((a) => a.event_type === "page_view")
        .length || 0;

    const telegramClicks = analytics?.
        filter((a) => a.event_type === "telegram_click")
        .length || 0;
    
    const uniqueVisitors = new Set(analytics?.filter((a) => {
        a.event_type === "unique_visit"
    }).map((a) => a.visitor_id) || []).size;

    const conversionRate = uniqueVisitors > 0 ? (
        (telegramClicks / uniqueVisitors) * 100
    ).toFixed(1) : 0;
    
    const total = predictions?.length || 0;

    const won = predictions?.filter(p => p.status === "won").length || 0;

    const lost = predictions?.filter(p => p.status === "lost").length || 0;

    const pending = predictions?.filter(p => p.status === "pending").length || 0;

    const settledBets = won + lost;

    const winRate = settledBets > 0 ? Math.round(won / (won + lost) * 100) : 0;
    
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const { data: weeklyStats } = 
        await supabase
            .from("daily_stats")
            .select("*")
            .gte("stat_date", sevenDaysAgo)
            .order("stat_date", {ascending: false});

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto p-6">
                <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <Link 
                            href="/" 
                            className="text-emerald-300 text-sm"
                        >
                            Italic Tips
                        </Link>
                        <h1 className="text-3xl font-bold">
                            Admin Dashboard
                        </h1>

                        <LogoutButton/>
                    </div>
                </div>
                

                <CreatePredictionForm/>

                <div className="mt-10">
                    <SettingsForm settings={settings}/>
                </div>

                <div>
                    <PredictionTable
                        predictions={
                            predictions || []
                        }
                    />
                </div>

                <AdminStats
                    total={total}
                    won={won}
                    lost={lost}
                    pending={pending}
                    winRate={winRate}
                />

                <WeeklyGrowth
                    stats={weeklyStats || []}
                />

                <GrowthStats
                    visitors={todayStats?.visitors || 0}
                    telegramClicks={todayStats?.telegram_clicks || 0}
                />
            </div>
        </div>
        
    )
}