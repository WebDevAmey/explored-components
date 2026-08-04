"use client";

import { useEffect, useState } from "react";

export function Progress({
  value,
  label,
}: {
  value: number;
  label?: string;
}) {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-xs text-olive-500 dark:text-olive-400">
            {label}
          </span>
          <span className="font-mono text-[10px] uppercase text-olive-400 dark:text-olive-500">
            {Math.round(value)}%
          </span>
        </div>
      )}
      <div
        className="h-2 overflow-hidden rounded-full bg-olive-200 dark:bg-olive-700"
        role="progressbar"
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-olive-950 dark:bg-olive-100 transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

export function ProgressShowcase() {
  const [value, setValue] = useState(18);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => {
        if (v >= 100) return 0;
        return v + 3;
      });
    }, 140);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <Progress value={value} label="Uploading photos" />
      <Progress value={62} label="Reading" />
      <Progress value={100} label="Shipped" />
    </div>
  );
}
