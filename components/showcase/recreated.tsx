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
    <div className="flex w-full flex-col items-center gap-6">
      <DisplayCard
        className="w-full"
        noScale
        name="Built-in Optimizations"
        description="Image, font and script optimization windows — a shine that sweeps on hover."
      >
        <BuiltInOptimizations />
      </DisplayCard>
      <DisplayCard
        className="w-full"
        noScale
        name="Responsive Card"
        description="A device switcher that springs between desktop, tablet and mobile."
      >
        <ResponsiveCardPreview />
      </DisplayCard>
    </div>
  );
}
