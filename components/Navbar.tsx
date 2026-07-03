"use client";

import Link from "next/link";
import TelegramButton from "./TelegramButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
  telegramUrl: string;
}

export default function Navbar({telegramUrl}: NavbarProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/history",
      label: "Results",
    },
    {
      href: "/about",
      label: "About",
    }
  ];

  return (
    <nav
      className="
      sticky top-0 z-50
      backdrop-blur-xl
      bg-slate-950/90
      border-b border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Italic Tips
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-full px-2 py-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      active 
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href={telegramUrl}
              target="_blank"
              className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg"
            >
              Join Telegram
            </Link>

            {/* mobile telegram */}
            <Link
              href={telegramUrl}
              target="_blank"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
            >
              📲
            </Link>

            {/* hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    px-4 py-3 rounded-xl
                    ${
                      active
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                    `}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  );
}