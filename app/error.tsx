"use client";

export default function Error({error, reset}: {error: Error, reset: () => void;}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
            <div className="max-w-lg text-center bg-white rounded-3xl shadow-xl p-10">
                <div className="text-6xl mb-4">
                    ⚠️
                </div>

                <h1 className="text-3xl font-bold mb-3">
                    Something went wrong
                </h1>

                <p className="text-slate-600 mb-8">
                    An unexpected error occurred.
                    Please try again.
                </p>

                <button
                    onClick={() => reset()}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 transition text-white font-bold"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}