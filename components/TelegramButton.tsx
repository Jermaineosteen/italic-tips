"use client";

import { useEffect, useState } from "react";

export default function TelegramButton({
  url,
}: {
  url: string;
}) {
  const [visitorId, setVisitorId] =
    useState<string | null>(null);

  useEffect(() => {
    setVisitorId(localStorage.getItem("italic_tips_visitor"));
  }, []);

  function handleClick() {
    if (!visitorId) return;

    const data = JSON.stringify({ visitorId });

    navigator.sendBeacon(
      "/api/track-telegram",
      new Blob([data], {
        type: "application/json",
      })
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="
        inline-flex
        items-center
        gap-3

        rounded-full

        bg-gradient-to-r
        from-emerald-500
        to-cyan-500

        px-8
        py-4

        font-bold
        text-white

        shadow-lg
        shadow-emerald-500/25

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-xl
        hover:shadow-emerald-500/40

        active:scale-95
      "
    >
      <span className="text-xl">
        📲
      </span>

      <span>
        Join Telegram
      </span>
    </a>
  );
}