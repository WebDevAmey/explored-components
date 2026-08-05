"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/motion/theme-toggle";

export default function Nav({ count }: { count?: number }) {
  return (
    <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
      <Link
        href="/"
        className="flex size-10 items-center justify-center rounded-full bg-olive-300 dark:bg-olive-700 text-olive-800 dark:text-olive-100 font-medium text-sm"
        aria-label="Go to home"
      >
        {site.initials}
      </Link>

      <Link
        href="/"
        className="flex gap-1 h-6 items-center w-full hover:opacity-70 transition-opacity"
        aria-label="Component showcase home"
      >
        <h1 className="font-medium relative shrink-0 text-olive-800 dark:text-olive-100 text-xl text-justify text-nowrap whitespace-pre">
          {site.name.split(" ")[0]}&nbsp;
          <span className="font-serif text-2xl italic">“</span>
          <span className="font-medium">component&nbsp;showcase</span>
          <span className="font-serif text-2xl italic">”</span>
        </h1>
      </Link>

      <nav
        className="flex gap-4 items-center relative shrink-0 w-full"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-medium relative shrink-0 text-sm text-justify text-nowrap whitespace-pre text-olive-800 dark:text-olive-100 font-semibold"
          aria-current="page"
        >
          Components
        </Link>
        {typeof count === "number" && (
          <span className="font-mono text-xs text-olive-400 dark:text-olive-500">
            {count.toString().padStart(2, "0")}
          </span>
        )}
        <ThemeToggle
          variant="blinds"
          className="ml-auto cursor-pointer text-olive-500 transition-colors hover:text-olive-800 dark:text-olive-400 dark:hover:text-olive-50"
          iconClassName="h-4 w-4"
        />
      </nav>
    </div>
  );
}
