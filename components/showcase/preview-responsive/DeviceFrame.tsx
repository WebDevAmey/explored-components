"use client";

import { AnimatePresence, motion } from "motion/react";

import type { DeviceFrameProps, DeviceSpec } from "./types";
import { springTransition } from "./utils";

function ContentBlocks({ device }: { device: DeviceSpec }) {
  const blocks = Array.from({ length: device.contentBlocks });

  if (device.contentLayout === "grid") {
    return (
      <div className="grid grid-cols-3 gap-1.5 p-3">
        {blocks.map((_, i) => (
          <div key={i} className="h-4 rounded-[3px] bg-white/[0.08]" />
        ))}
      </div>
    );
  }

  if (device.contentLayout === "stack") {
    return (
      <div className="flex flex-col gap-1.5 p-3">
        {blocks.map((_, i) => (
          <div key={i} className="h-5 rounded-[3px] bg-white/[0.08]" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5 p-2.5">
      {blocks.map((_, i) => (
        <div key={i} className="h-2.5 rounded-[2px] bg-white/[0.08]" />
      ))}
    </div>
  );
}

function DesktopContent({ device }: { device: DeviceSpec }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center gap-1 border-b border-white/[0.08] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>
      <ContentBlocks device={device} />
    </div>
  );
}

function TabletContent({ device }: { device: DeviceSpec }) {
  return (
    <div className="flex h-full w-full flex-col items-center p-2">
      <span className="mb-1.5 h-1 w-1 shrink-0 rounded-full bg-white/15" />
      <div className="relative w-full flex-1 overflow-hidden rounded-[6px] bg-black/20">
        <ContentBlocks device={device} />
      </div>
    </div>
  );
}

function MobileContent({ device }: { device: DeviceSpec }) {
  return (
    <div className="flex h-full w-full flex-col items-center p-1.5">
      <span className="mb-1.5 h-1 w-6 shrink-0 rounded-full bg-white/15" />
      <div className="relative w-full flex-1 overflow-hidden rounded-[10px] bg-black/20">
        <ContentBlocks device={device} />
      </div>
      <span className="mt-1.5 h-0.5 w-5 shrink-0 rounded-full bg-white/15" />
    </div>
  );
}

const CONTENT: Record<DeviceSpec["id"], typeof DesktopContent> = {
  desktop: DesktopContent,
  tablet: TabletContent,
  mobile: MobileContent,
};

export function DeviceFrame({ device }: DeviceFrameProps) {
  const Content = CONTENT[device.id];

  return (
    <motion.div
      className="relative overflow-hidden border border-white/[0.1] bg-white/[0.03]"
      animate={{
        width: device.frameWidth,
        height: device.frameHeight,
        borderRadius: device.radius,
      }}
      transition={springTransition}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={device.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Content device={device} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
