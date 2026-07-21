import { Skeleton } from "@/components/ui/skeleton";

export default function ResultsSummarySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {Array.from({ length: 4 }).map((_, i) => (

        <div
          key={i}
          className="rounded-2xl border bg-white p-6"
        >

          <Skeleton className="mx-auto h-4 w-24" />

          <Skeleton className="mx-auto mt-4 h-10 w-16" />

        </div>

      ))}

    </div>
  );
}