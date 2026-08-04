"use client";

import { useState } from "react";

export function SegmentedControl({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-lg bg-olive-200 dark:bg-olive-700 p-1"
    >
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option)}
            className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
              active
                ? "bg-olive-950 dark:bg-olive-100 text-olive-50 dark:text-olive-800 shadow-sm"
                : "text-olive-500 dark:text-olive-300 hover:text-olive-800 dark:hover:text-olive-100"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function SegmentedShowcase() {
  const [view, setView] = useState("Grid");
  const [period, setPeriod] = useState("Week");

  return (
    <div className="flex flex-col items-center gap-4">
      <SegmentedControl
        label="View"
        options={["Grid", "List", "Board"]}
        value={view}
        onChange={setView}
      />
      <SegmentedControl
        label="Period"
        options={["Day", "Week", "Month", "Year"]}
        value={period}
        onChange={setPeriod}
      />
      <p className="font-mono text-xs uppercase text-olive-400 dark:text-olive-500">
        Active: {view} · {period}
      </p>
    </div>
  );
}
