import { Skeleton } from "./ui/skeleton";

export default function ResultsSummarySkeleton() {
    return (
        <div className="rounded-xl border bg-white p-4 shadow-sm">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className="flex items-start justify-between"
                >
                    <Skeleton className="mx-auto h-4 w-20"/>
                    <Skeleton className="mx-auto mt-4 h-10 w-14"/>
                </div> 
            ))}
        </div>
    )
}