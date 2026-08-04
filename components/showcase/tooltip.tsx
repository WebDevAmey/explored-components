"use client";

import { useState } from "react";

export function Tooltip({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="group/tooltip relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-olive-950 dark:bg-olive-100 text-olive-50 dark:text-olive-800 text-xs rounded whitespace-nowrap"
        >
          {content}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-olive-950 dark:border-t-olive-100" />
        </span>
      )}
    </span>
  );
}

export function TooltipShowcase() {
  return (
    <div className="flex items-center gap-6">
      <Tooltip content="Rounds your corners">
        <span className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-olive-500 dark:border-olive-400/30 text-sm text-olive-800 dark:text-olive-100 transition-colors hover:border-olive-950 dark:hover:border-olive-100">
          <span className="font-serif italic">R</span>
        </span>
      </Tooltip>
      <Tooltip content="Shifts your palette">
        <span className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-olive-500 dark:border-olive-400/30 text-sm text-olive-800 dark:text-olive-100 transition-colors hover:border-olive-950 dark:hover:border-olive-100">
          <span className="font-serif italic">S</span>
        </span>
      </Tooltip>
      <Tooltip content="Hmm, this one's a mystery">
        <span className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-olive-500 dark:border-olive-400/30 text-sm text-olive-800 dark:text-olive-100 transition-colors hover:border-olive-950 dark:hover:border-olive-100">
          <span className="font-serif italic">?</span>
        </span>
      </Tooltip>
    </div>
  );
}
