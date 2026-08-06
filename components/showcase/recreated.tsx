"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { BuiltInOptimizations } from "@/components/showcase/preview-optimizations/BuiltInOptimizations";
import { ResponsiveCard } from "@/components/showcase/preview-responsive/ResponsiveCard";
import { DisplayCard } from "@/components/showcase/display-card";

const RESPONSIVE_DESIGN_WIDTH = 380;

function ResponsiveCardPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const demo = el.parentElement?.parentElement;
    if (!demo) return;
    const apply = () => setScale(Math.min(1, demo.clientWidth / RESPONSIVE_DESIGN_WIDTH));
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(demo);
    return () => observer.disconnect();
  }, []);

  const offset = (RESPONSIVE_DESIGN_WIDTH * (1 - scale)) / 2;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        width: RESPONSIVE_DESIGN_WIDTH,
        height: RESPONSIVE_DESIGN_WIDTH,
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          transform: `translateX(${offset}px) translateY(${offset}px) scale(${scale})`,
          width: RESPONSIVE_DESIGN_WIDTH,
          height: RESPONSIVE_DESIGN_WIDTH,
        }}
      >
        <ResponsiveCard />
      </div>
    </div>
  );
}

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
        <ResponsiveCardPreview />
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
