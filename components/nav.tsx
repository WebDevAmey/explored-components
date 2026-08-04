"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useTheme } from "@/components/theme-provider";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="3.83" fill="currentColor" opacity="0.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.667a.667.667 0 0 1 .667.667v1.333a.667.667 0 0 1-1.334 0V1.334A.667.667 0 0 1 8 .667ZM2.862 2.862a.667.667 0 0 1 .942 0l.943.942a.667.667 0 1 1-.943.943l-.942-.943a.667.667 0 0 1 0-.942Zm10.276 0a.667.667 0 0 1 0 .942l-.942.943a.667.667 0 1 1-.943-.943l.943-.942a.667.667 0 0 1 .942 0ZM8 5.333a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334Zm-7.333 2A.667.667 0 0 1 1.333 6.667h1.334a.667.667 0 0 1 0 1.333H1.333a.667.667 0 0 1-.666-.667Zm12 0a.667.667 0 0 1 .667-.667h1.333a.667.667 0 0 1 0 1.334h-1.333a.667.667 0 0 1-.667-.667Zm-9.805 3.472a.667.667 0 0 1 .942 0l.943.943a.667.667 0 1 1-.943.942l-.942-.942a.667.667 0 0 1 0-.943Zm7.86 0a.667.667 0 0 1 .943.943l-.943.942a.667.667 0 1 1-.942-.942l.942-.943ZM8 12a.667.667 0 0 1 .667.666V14a.667.667 0 0 1-1.334 0v-1.334A.667.667 0 0 1 8 12Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.01 1.362a.667.667 0 0 1 .045.54 4.02 4.02 0 0 0-.61 2.115 4.555 4.555 0 0 0 4.556 4.556c.738 0 1.44-.2 2.046-.55a.667.667 0 0 1 .94.844 6.75 6.75 0 0 1-6.32 4.302 6.75 6.75 0 1 1 0-13.5c.415 0 .826.037 1.232.111.443.081.75.504.749.955a.667.667 0 0 1-.185.458.667.667 0 0 1-.453.169Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Nav({ count }: { count?: number }) {
  const { theme, toggleTheme } = useTheme();

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
        <button
          type="button"
          onClick={toggleTheme}
          className="group relative cursor-pointer bg-transparent border-none px-2 py-1 -mx-2 -my-1 ml-auto transition-all text-olive-500 hover:text-olive-800 dark:text-olive-400 dark:hover:text-olive-50 flex items-center"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <span className="size-4">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>
      </nav>
    </div>
  );
}
