import Link from "next/link";
import Advertisement from "./Advertisement";

interface FooterProps {
  title: string;
  description: string;
}
export default function Footer({title, description}: FooterProps) {
  return (
    <footer
      className="
      mt-20
      border-t
      border-slate-200
      bg-slate-950
      text-slate-300
      "
    >
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              {title}
            </h3>

            <p className="text-sm">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">
              Navigation
            </h4>

            <div className="space-y-2">
              <Link href="/" className="block hover:text-white">
                Home
              </Link>

              <Link href="/history" className="block hover:text-white">
                Results
              </Link>

              <Link
                href="/about"
                className="block hover:text-white"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">
              Legal
            </h4>

            <div className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/disclaimer"
                className="block hover:text-white"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Italic Tips. All rights reserved.
          </p>

          <p className="mt-2">
            18+ Gamble Responsibly. Betting involves risk and losses are possible.
          </p>
        </div>
      </div>
    </footer>
  );
}