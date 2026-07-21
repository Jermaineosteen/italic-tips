import { Skeleton } from "@/components/ui/skeleton";

export default function AdminSectionSkeleton() {
  return (
    <div className="rounded-3xl border bg-white p-6">

      <Skeleton className="h-8 w-52 mb-6" />

      <div className="space-y-4">

        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-32 w-full" />

      </div>

    </div>
  );
}