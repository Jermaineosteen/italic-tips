import { Fragment } from 'react';

import Hero from "@/components/Hero";

import PredictionCard from "@/components/PredictionCard";
import ResultsSummary from "@/components/ResultsSummary";
import TelegramCTA from "@/components/TelegramCTA";
import FeaturedPrediction from "@/components/FeaturedPredictions";

import { createSupabaseServerClient } from "../lib/supabase-server";
import { getSettings } from "@/lib/getSettings";
import { createClient } from "@/lib/supabase/server";

import CategoryFilter from "@/components/CategoryFilter";
import VisitorTracker from "@/components/VisitorTracker";
import JoinTelegramModal from "@/components/JoinTelegramModal";
import Advertisement from "@/components/Advertisement";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const params = await searchParams;

  const category = params.category || "all";

  const settings = await getSettings();

  const supabase = await createClient();

  let query = supabase
    .from("predictions")
    .select("*")
    .order("kickoff_time", {
      ascending: true,
    });

  if (category !== "all") {
    query = query.eq(
      "category",
      category
    );
  }

  const { data: predictions } =
    await query;

  const { data: featured } =
    await createSupabaseServerClient()
      .from("predictions")
      .select("*")
      .eq("featured", true)
      .limit(6);

  const { data: results } =
    await createSupabaseServerClient()
      .from("predictions")
      .select("status");

  const won =
    results?.filter(
      (p) => p.status === "won"
    ).length || 0;

  const lost =
    results?.filter(
      (p) => p.status === "lost"
    ).length || 0;

  const voided =
    results?.filter(
      (p) => p.status === "void"
    ).length || 0;

  return (
    <>
      <Hero
        title={settings?.hero_title}
        subtitle={settings?.hero_subtitle}
        telegramUrl={
          settings?.telegram_url
        }
      />

      <Advertisement position="hero" />

      <JoinTelegramModal
        telegramUrl={settings.telegram_url}
      />

      <FeaturedPrediction
        predictions={featured || []}
      />

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResultsSummary
            won={won}
            lost={lost}
            voided={voided}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold">
            Today's Predictions
          </h2>

          <CategoryFilter
            current={category}
          />
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {predictions?.length ? (
            predictions.map((prediction, index) => (
              <Fragment key={prediction.id}>
                <PredictionCard
                  key={prediction.id}
                  prediction={
                    prediction
                  }
                />

                {index === 4  && (
                  <div className="md:col-span-2 lg:col-span-3">
                    <Advertisement
                      position="between_predictions"
                    />
                  </div>
                )}
              </Fragment>
              )
            )
          ) : (
            <div
              className="
                col-span-full
                rounded-xl
                border
                p-10
                text-center
                text-gray-500
              "
            >
              No predictions
              available at the
              moment.
            </div>
          )}
        </div>

      </section>

      <TelegramCTA telegramUrl={settings.telegram_url}/>

      {/* <InstallAppBanner /> */}

      <VisitorTracker />
    </>
  );
}