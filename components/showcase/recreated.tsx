"use client";

import { BuiltInOptimizations } from "@/components/showcase/preview-optimizations/BuiltInOptimizations";
import { ResponsiveCard } from "@/components/showcase/preview-responsive/ResponsiveCard";
import { DisplayCard } from "@/components/showcase/display-card";

export function RecreatedShowcase() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      <DisplayCard
        name="Built-in Optimizations"
        description="Image, font and script optimization windows — a shine that sweeps on hover."
      >
        <BuiltInOptimizations />
      </DisplayCard>
      <DisplayCard
        name="Responsive Card"
        description="A device switcher that springs between desktop, tablet and mobile."
      >
        <ResponsiveCard />
      </DisplayCard>
      <DisplayCard
        name="Coming soon"
        description="Reserved space for a third recreated component."
      >
        <div className="flex items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-dashed border-olive-300 text-olive-400 dark:border-olive-700 dark:text-olive-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </div>
      </DisplayCard>
    </div>
  );
}
