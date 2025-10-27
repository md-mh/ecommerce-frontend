"use client";

import Link from "next/link";
import Theme from "./Theme";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-(--primary)">
            Saimon Store
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Theme />
        </div>
      </div>
    </header>
  );
}
