"use client";

import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import { DevicePreview } from "./DevicePreview";
import { DeviceTabs } from "./DeviceTabs";
import type { DeviceKind } from "./types";

export function ResponsiveCard() {
  const [active, setActive] = useState<DeviceKind>("desktop");
  const [isHovered, setIsHovered] = useState(false);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const glowBackground = useMotionTemplate`
    radial-gradient(
      260px circle at ${glowX}px ${glowY}px,
      rgba(255,255,255,0.08),
      transparent 75%
    )
  `;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className="relative mx-auto flex aspect-square w-full max-w-[380px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      style={{ background: "#000000" }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[32px]"
        style={{ background: glowBackground }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      <DevicePreview active={active} />

      <div className="relative flex flex-col gap-4">
        <DeviceTabs active={active} onChange={setActive} />

        <div className="text-center">
          <h3 className="text-md font-semibold text-white/60">
            Responsive Components
          </h3>
          <p className="mt-1 text-sm text-white/50">
            Works on all devices and screen sizes
          </p>
        </div>
      </div>
    </motion.div>
  );
}
