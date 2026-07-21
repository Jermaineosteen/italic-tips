import { Skeleton } from "@/components/ui/skeleton";

export default function FormSkeleton() {
  return (
    <div className="space-y-5">

      {Array.from({ length: 6 }).map((_, i) => (

        <Skeleton
          key={i}
          className="h-12 w-full"
        />

      ))}

      <Skeleton className="h-12 w-40" />

    </div>
  );
}