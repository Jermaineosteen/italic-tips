"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  telegramUrl: string;
}

export default function Navbar({
  telegramUrl,
}: NavbarProps) {
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
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent"
        >
          Italic Tips
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-2 py-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop Telegram */}
          <Link
            href={telegramUrl}
            target="_blank"
            className="hidden md:block"
          >
            <Button className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-semibold shadow-lg hover:from-emerald-600 hover:to-cyan-600">
              Join Telegram
            </Button>
          </Link>

          {/* Mobile Telegram */}
          <Link
            href={telegramUrl}
            target="_blank"
            className="md:hidden"
          >
            <Button
              size="icon-sm"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
            >
              📲
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-white hover:bg-slate-800 md:hidden"
                >
                  <Menu className="size-5" />
                </Button>
              }
            />

            <SheetContent
              side="right"
              className="border-slate-800 bg-slate-950 p-6"
            >
              <div className="mt-12 flex flex-col gap-3">

                {links.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                        active
                          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  href={telegramUrl}
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  <Button className="mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                    Join Telegram
                  </Button>
                </Link>

              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
}