"use client";

import { useState } from "react";

import { OptimizationWindow } from "./OptimizationWindow";

export function BuiltInOptimizations() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      aria-label="Built-in Optimizations"
      role="img"
      className="relative flex w-full max-w-[400px] flex-col overflow-hidden border transition-colors duration-150"
      style={{
        height: 380,
        padding: 24,
        borderRadius: 12,
        borderColor: isHovered ? "#444444" : "#333333",
        background: isHovered ? "rgba(255,255,255,0.02)" : "#000000",
        justifyContent: "flex-end",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full w-full items-center justify-center select-none">
        <div
          className="relative"
          style={{
            width: 278,
            height: 211,
            bottom: 8,
            contain: "strict",
            overflow: "hidden",
          }}
        >
          <OptimizationWindow variant="original" isHovered={isHovered} />
          <OptimizationWindow variant="1440" isHovered={isHovered} />
          <OptimizationWindow variant="375" isHovered={isHovered} />
        </div>
      </div>

      <div className="flex flex-col">
        <h3
          className="text-white"
          style={{ fontSize: 20, fontWeight: 600, lineHeight: "32px" }}
        >
          Built-in Optimizations
        </h3>
        <p
          className="text-[#888888]"
          style={{ fontSize: 14, lineHeight: 1.5 }}
        >
          Automatic Image, Font, and Script Optimizations for improved UX and
          Core Web Vitals.
        </p>
      </div>
    </div>
  );
}
