import PredictionCardSkeleton from "./PredictionCardSkeleton";

export default function PredictionGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

      {Array.from({ length: 9 }).map((_, i) => (

        <PredictionCardSkeleton key={i} />

      ))}

    </div>
  );
}