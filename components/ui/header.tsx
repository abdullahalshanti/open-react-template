"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5 absolute top-0 left-0 right-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm border border-gray-800">
          
          {/* Site branding (Logo) */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation Links for Services & Branches */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#services" className="transition hover:text-emerald-400">
              Services
            </a>
            <a href="#branches" className="transition hover:text-emerald-400">
              Our Branches
            </a>
          </nav>

          {/* Action Contact Button */}
          <div className="flex flex-1 items-center justify-end">
            <a
              href="mailto:info@digitalabed.com"
              className="btn-sm rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md transition hover:bg-emerald-500 text-center"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
