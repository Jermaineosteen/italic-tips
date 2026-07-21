"use client";

import { useState, useTransition } from 'react';
import { toast } from 'sonner';

import { restorePrediction } from '@/app/admin/action';

interface Result {
    id: string;
    match_name: string;
    country: string;
    prediction: string;
    category: string;
    status: string;
}

export default function ArchivedResult({
    results,
}: {results: Result[]}) {
    const [isPending, startTransition] = useTransition();
    const [search, setSearch] = useState("");
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const filteredResults = results.filter((result) => {
        const term = search.toLowerCase();
        return (
            result.match_name.toLocaleLowerCase().includes(term) ||
            result.country.toLocaleLowerCase().includes(term) ||
            result.prediction.toLocaleLowerCase().includes(term) ||
            result.category.toLocaleLowerCase().includes(term) ||
            result.status.toLocaleLowerCase().includes(term)
        );
    })

    if (!results.length) {
        <div className='rounded-2xl border bg-white p-6 text-center text-slate-500'>
            No archived results yet.
        </div>
    }
    return (
        <div className="space-y-4">
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold'>Archived Result</h2>
                <span className='rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700'>
                    {results.length}
                </span>
            </div>

            <div className='mb-6'>
                <input
                    type="text"
                    placeholder='Search archived results...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500'
                />
            </div>
            {filteredResults.length === 0 && (
                <div className="rounded-xl border p-8 text-center text-slate-500">
                    No results found
                </div>
            )}

            {filteredResults.map((result) => (
                <div
                    key={result.id}
                    className="rounded-2xl border bg-white p-5"
                >
                    <h3 className='font-bold'>{result.match_name}</h3>
                    <p className='text-sm text-slate-500'>{result.country}</p>
                    <p className='mt-3'>{result.prediction}</p>
                    <div className='mt-4'>
                        <button
                            disabled={loadingId === result.id}
                            onClick={() => {
                                if (!confirm("Restore this prediction?")) {
                                    return;
                                }
                                setLoadingId(result.id);
                                startTransition(async () => {
                                    try {
                                        await restorePrediction(result.id);
                                        toast.success("Prediction restored.");
                                    } catch (err) {
                                        toast.error("Unable to restore.");
                                    } finally {
                                        setLoadingId(null);
                                    }
                                })
                            }}
                            className="rounded-xl bg-emerald-600 px-5 py-2 text-white disabled:opacity-50"
                        >
                            {loadingId === result.id ? "Restoring..." : "Restore"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}