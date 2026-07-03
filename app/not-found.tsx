import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6">
            <div className="text-center">
                <h1 className="text-8xl font-black text-white ">
                    404
                </h1>

                <p className="mt-4 text-slate-300 text-xl">
                    Page not found
                </p>

                <Link
                    href="/"
                    className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold"
                >
                    Back Home
                </Link>
            </div>
        </div>
    )
}