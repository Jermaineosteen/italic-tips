import TelegramButton from "./TelegramButton";

export default function Hero({
  title,
  subtitle,
  telegramUrl,
}: {
  title: string;
  subtitle: string;
  telegramUrl: string;
}) {
  return (
    <section
      className="
      relative overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-emerald-950
      text-white
      "
    >
      <div
        className="
        absolute
        top-0
        right-0
        h-96
        w-96
        rounded-full
        bg-emerald-500/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        h-96
        w-96
        rounded-full
        bg-cyan-500/20
        blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto px-4 py-28 text-center">
        <div
          className="
          inline-flex
          items-center
          rounded-full
          border
          border-emerald-500/30
          bg-emerald-500/10
          px-4
          py-2
          text-sm
          text-emerald-300
          "
        >
          ⚡ Daily Football Predictions
        </div>

        <h1
          className="
          mt-8
          text-5xl
          md:text-7xl
          font-extrabold
          leading-tight
          "
        >
          {title}
        </h1>

        <p
          className="
          mt-6
          max-w-2xl
          mx-auto
          text-lg
          md:text-xl
          text-slate-300
          "
        >
          {subtitle}
        </p>

        <div className="mt-10 flex justify-center">
          <TelegramButton url={telegramUrl} />
        </div>
      </div>
    </section>
  );
}