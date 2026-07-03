import { createClient } from "@/lib/supabase/server";
import CreateAdvertisementForm from "@/components/CreateAdvertisementForm";

export default async function AdvertisementPage() {
    const supabase = await createClient();

    const { data: ads } = await supabase
        .from("advertisements")
        .select("*")
        .order("created_at", {
            ascending: false
        });

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto p-6 space-y-8">
                <CreateAdvertisementForm/>

                <div className="bg-white rounded-3xl shadow p-6 ">
                    <h2 className="text-2xl font-bold mb-6">
                        Current Advertisements
                    </h2>

                    <div className="space-y4">
                        {ads?.map((ad) => (
                            <div
                                key={ad.id}
                                className="border rounded-2xl p-5"
                            >
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">{ad.title}</h3>
                                        <p>{ad.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}