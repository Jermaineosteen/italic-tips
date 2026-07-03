import TelegramButton from "./TelegramButton";

interface TelegramCTAProps {
  telegramUrl: string;
}

export default function TelegramCTA({
  telegramUrl,
}: TelegramCTAProps) {
  return (
    <section className="py-16 px-4">
      <div
        className="
        max-w-5xl
        mx-auto

        rounded-3xl

        bg-gradient-to-r
        from-emerald-600
        via-emerald-500
        to-cyan-500

        p-8
        md:p-12

        text-center
        text-white

        shadow-2xl
        shadow-emerald-500/20
        "
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">
            📲
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Want More Daily Tips?
          </h2>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Join our Telegram channel for daily predictions,
            banker tips, live betting opportunities and
            exclusive betting insights.
          </p>

          <div className="mt-8 flex justify-center">
            <TelegramButton url={telegramUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}