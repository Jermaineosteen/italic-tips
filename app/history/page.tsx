import PredictionCard from "@/components/PredictionCard";

import { createClient } from "@/lib/supabase/server";

export default async function HistoryPage() {
    const supabase = await createClient();

    const { data } = 
        await supabase
            .from("predictions")
            .select("*")
            .neq("status", "pending")
            .order("created_at", {ascending: false});

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8">
                Results History
            </h1>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((prediction) => (
                    <PredictionCard key={prediction.id} prediction={prediction}/>
                ))}
             </div>
        </div>
    )
}