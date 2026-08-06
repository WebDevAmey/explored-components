"use client";

import { motion } from "motion/react";

import { devices } from "./data";
import type { DeviceTabsProps } from "./types";
import { pillTransition } from "./utils";

export function DeviceTabs({ active, onChange }: DeviceTabsProps) {
  return (
    <div role="tablist" aria-label="Device layout" className="flex gap-2">
      {devices.map((device) => {
        const isActive = device.id === active;

        return (
          <button
            key={device.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(device.id)}
            className="relative z-10 flex-1 rounded-sm px-2 py-1.5 text-xs font-medium transition-colors duration-200"
          >
            {isActive && (
              <motion.div
                layoutId="device-tab-pill"
                className="absolute inset-0 -z-10 rounded-sm bg-white/10"
                transition={pillTransition}
              />
            )}
            <span
              className={isActive ? "text-white" : "text-white/45 hover:text-white/70"}
            >
              {device.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
