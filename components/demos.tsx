import type { ReactNode } from "react";
import { ButtonShowcase } from "@/components/showcase/button";
import { BuiltInOptimizations } from "@/components/showcase/preview-optimizations/BuiltInOptimizations";
import { ResponsiveCard } from "@/components/showcase/preview-responsive/ResponsiveCard";

export const demos: Record<string, ReactNode> = {
  button: <ButtonShowcase />,
  "preview-optimizations": <BuiltInOptimizations />,
  "preview-responsive": <ResponsiveCard />,
};
