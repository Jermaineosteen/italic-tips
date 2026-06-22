import PredictionCard from "./PredictionCard";
import type { Prediction } from "@/types/prediction";

interface FeaturePredictionProps {
    predictions: Prediction[]
}

export default function FeaturedPrediction({predictions,}: FeaturePredictionProps) {
        if (!predictions.length) return null;

        return (
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-2 mb-6">
                        <span>🔥</span>

                        <h2 className="text-3xl font-bold">
                            Featured Picks
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {predictions.map(prediction => (
                            <PredictionCard key={prediction.id} prediction={prediction} />
                        ))}
                    </div>
                </div>
            </section>
        )
}