import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <Skeleton className="mx-auto h-12 w-80 rounded-xl" />

        <Skeleton className="mx-auto mt-6 h-5 w-full max-w-xl" />

        <Skeleton className="mx-auto mt-3 h-5 w-96" />

        <Skeleton className="mx-auto mt-10 h-12 w-52 rounded-full" />

      </div>
    </section>
  );
}