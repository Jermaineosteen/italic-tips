import { Skeleton } from "./ui/skeleton";

export default function HeroSkeleton() {
    return (
        <section className="bg-slate-950 py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <Skeleton className="mx-auto h-12 w-80"/>
                <Skeleton className="mx-auto mt-6 h-5 w-full max-w-xl"/>
                <Skeleton className="mx-auto mt-3 h-5 w-96"/>
                <Skeleton className="mx-auto mt-10 h-12 w-52 rounded-full"/>
            </div>
        </section>
    )
}