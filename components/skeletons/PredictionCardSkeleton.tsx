import { Skeleton } from "@/components/ui/skeleton";

export default function PredictionCardSkeleton() {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">

      <div className="flex justify-between">

        <div className="space-y-2">

          <Skeleton className="h-5 w-40" />

          <Skeleton className="h-4 w-20" />

        </div>

        <Skeleton className="h-7 w-7 rounded-full" />

      </div>

      <div className="mt-3 flex justify-between">

        <Skeleton className="h-6 w-24 rounded-full" />

        <Skeleton className="h-6 w-20 rounded-full" />

      </div>

      <Skeleton className="mt-4 h-16 w-full rounded-xl" />

    </div>
  );
}