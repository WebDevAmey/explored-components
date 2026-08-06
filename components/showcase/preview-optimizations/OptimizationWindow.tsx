"use client";

import { motion } from "motion/react";

import { DotMatrixChart } from "./DotMatrixChart";
import { PlaceholderIcon } from "./PlaceholderIcon";

type WindowVariant = "original" | "1440" | "375";

const VARIANTS: Record<
  WindowVariant,
  {
    label: string;
    width: number;
    height: number;
    radius: number;
    gradient: string;
    labelColor: string;
    zIndex: number;
    transform?: string;
    rest: { top?: string; left?: string; bottom?: string };
    final: { top?: string; left?: string; bottom?: string };
    shineDelay: number;
    popDelay: number;
  }
> = {
  original: {
    label: "Original",
    width: 210,
    height: 146,
    radius: 12,
    gradient: "linear-gradient(224.37deg, #2c2c2cbf 0%, #000000bf 100%)",
    labelColor: "#fafafa",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
    rest: { top: "50%", left: "50%" },
    final: { top: "calc(50% - 32px)", left: "calc(50% + 32px)" },
    shineDelay: 0,
    popDelay: 0,
  },
  "1440": {
    label: "1440px",
    width: 174,
    height: 118,
    radius: 10,
    gradient: "linear-gradient(91.47deg, #303030bf 1.7%, #000000bf 100%)",
    labelColor: "#888888",
    zIndex: 2,
    transform: "translate(-50%, -50%)",
    rest: { top: "calc(50% - 32px)", left: "calc(50% + 32px)" },
    final: { top: "calc(50% + 12px)", left: "calc(50% - 12px)" },
    shineDelay: 0.4,
    popDelay: 0.35,
  },
  "375": {
    label: "375px",
    width: 128,
    height: 96,
    radius: 8,
    gradient: "linear-gradient(42.08deg, #2d2d2dbf -0.27%, #000000bf 100%)",
    labelColor: "#444444",
    zIndex: 3,
    rest: { bottom: "32px", left: "32px" },
    final: { bottom: "0px", left: "0px" },
    shineDelay: 0.6,
    popDelay: 0.55,
  },
};

interface OptimizationWindowProps {
  variant: WindowVariant;
  isHovered: boolean;
}

export function OptimizationWindow({ variant, isHovered }: OptimizationWindowProps) {
  const v = VARIANTS[variant];
  const isOriginal = variant === "original";

  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        width: v.width,
        height: v.height,
        borderRadius: v.radius,
        background: v.gradient,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.2)",
        backdropFilter: "blur(4px)",
        zIndex: v.zIndex,
        transform: v.transform,
      }}
      initial={{ opacity: isOriginal ? 1 : 0, ...v.rest }}
      animate={{ opacity: 1, ...v.final }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: v.popDelay,
      }}
    >
      <div className="flex h-7 items-center border-b border-white/10">
        <span
          className="ml-auto h-full border-l border-white/10 px-3 font-mono text-[11px] uppercase"
          style={{ color: v.labelColor, display: "flex", alignItems: "center" }}
        >
          {v.label}
        </span>
      </div>

      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100% - 28px)" }}
      >
        {variant === "original" ? (
          <PlaceholderIcon width={150} height={72} />
        ) : (
          <DotMatrixChart
            width={variant === "1440" ? 132 : 92}
            height={variant === "1440" ? 63 : 44}
            dotSize={variant === "1440" ? 2 : 1.5}
            isHovered={isHovered}
            sphereShape={variant === "1440" ? "circle" : "plus"}
          />
        )}
      </div>

      {!isOriginal && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            overflow: "hidden",
            borderRadius: "inherit",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              transform: "scale(2) rotate(45deg)",
              background:
                "linear-gradient(90deg, transparent 20% 40%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 55%, transparent 70% 100%) 0 0/200%",
              animationName: isHovered ? "shine-sweep" : "none",
              animationDuration: "1.6s",
              animationTimingFunction: "ease",
              animationDelay: `${v.shineDelay}s`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
