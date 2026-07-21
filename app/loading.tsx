import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import PredictionGridSkeleton from "@/components/skeletons/PredictionGridSkeleton";
import ResultsSummarySkeleton from "@/components/skeletons/ResultsSummarySkeleton";

export default function Loading() {
  return (
    <>
      <HeroSkeleton />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <PredictionGridSkeleton />
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <ResultsSummarySkeleton />
        </div>
      </section>
    </>
  );
}