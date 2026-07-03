export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
                <div className="h-14 w-72 rounded-xl bg-slate-200 mb-6">
                    <div className="h-6 w-96 rounded bg-slate-200 mb-10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                                    <div className="h-6 w-40 rounded bg-slate-200 mb-4" />

                                        <div className="h-4 w-full rounded bg-slate-200 mb-2" />

                                        <div className="h-4 w-3/4 rounded bg-slate-200 mb-6" />

                                        <div className="flex justify-between">
                                            <div className="h-4 w-20 rounded bg-slate-200" />

                                            <div className="h-4 w-16 rounded bg-slate-200" />
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}