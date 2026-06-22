import Link from "next/link";
import TelegramButton from "./TelegramButton";

export default function Navbar() {
  return (
    <nav
      className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-slate-950/90
      border-b border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Italic Tips
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="
            text-slate-300
            hover:text-white
            transition
            "
          >
            Home
          </Link>

          <Link
            href="/history"
            className="
            text-slate-300
            hover:text-white
            transition
            "
          >
            Results
          </Link>
        </div>

        <div className="hidden md:block">
            <TelegramButton url="https://t.me/magictpx" />
        </div>
      </div>
    </nav>
  );
}