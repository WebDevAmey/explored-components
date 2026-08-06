"use client";

import { motion } from "motion/react";

import { DeviceFrame } from "./DeviceFrame";
import { getDevice } from "./data";
import type { DevicePreviewProps } from "./types";
import { springTransition } from "./utils";

export function DevicePreview({ active }: DevicePreviewProps) {
  const device = getDevice(active);

  return (
    <div className="relative flex h-[190px] w-full items-center justify-center">
      <div className="relative flex items-center justify-center">
        <DeviceFrame device={device} />

        <motion.div
          aria-hidden
          className="absolute -bottom-4 h-2 rounded-full bg-white/[0.06] blur-[2px]"
          animate={{ width: device.frameWidth * 0.7 }}
          transition={springTransition}
        />
      </div>
    </div>
  );
}
