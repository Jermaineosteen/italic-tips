import PredictionCard from "@/components/PredictionCard";

import { createClient } from "@/lib/supabase/server";

export default async function HistoryPage() {
    const supabase = await createClient();

    const { data: results } = 
        await supabase
            .from("results")
            .select("*")
            .order("kickoff_time", {ascending: false})

    if (!results) {
        return (
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8">
                    Results History
                </h1>
                <p className="text-slate-500">No results found</p>
            </div>
        )
    }   

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8">
                Results History
            </h1>

            
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results?.map((result) => (
                    <PredictionCard key={result.id} prediction={result}/>
                ))}
             </div>
        </div>
    )
}