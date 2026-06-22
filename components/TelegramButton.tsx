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
    const storedId =
      localStorage.getItem(
        "italic_tips_visitor"
      );

    setVisitorId(storedId);
  }, []);

  async function handleClick() {
    try {
      await fetch(
        "/api/track-telegram",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            visitorId,
          }),
        }
      );
    } catch (error) {
      console.error(
        "Failed to track telegram click",
        error
      );
    }

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <button
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
    </button>
  );
}