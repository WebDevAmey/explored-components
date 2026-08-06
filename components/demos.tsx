import type { ReactNode } from "react";
import { ButtonShowcase } from "@/components/showcase/button";
import { RecreatedShowcase } from "@/components/showcase/recreated";

export const demos: Record<string, ReactNode> = {
  button: <ButtonShowcase />,
  "recreated-components": <RecreatedShowcase />,
};
