import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    category: string;
}

export default function Pagination({
    currentPage,
    totalPages,
    category
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages = Array.from({length: totalPages}, (_, i) => i + 1);
    
    const createHref = (page: number) => {
        const params = new URLSearchParams();

        if (category !== "all") {
            params.set("category", category);
        }
        params.set("page", page.toString());
        return `/?${params.toString()}`;
    };

    return (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {currentPage > 1 && (
                <Link
                    href={createHref(currentPage - 1)}
                    scroll={false}
                    className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100"
                >
                    ← Previous
                </Link>
            )}

            {pages.map(page => (
                <Link
                    key={page}
                    href={createHref(page)}
                    scroll={false}
                    className={`rounded-xl px-4 py-2 font-semibold transition ${page === currentPage ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg" : "border border-slate-300 hover:bg-slate-100"}`}
                >
                    {page}
                </Link>
            ))}

            {currentPage < totalPages && (
                <Link
                    href={createHref(currentPage + 1)}
                    scroll={false}
                    className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100"
                >
                    Next →
                </Link>
            )}
        </div>
    )
}