import type { ReactNode } from "react";
import { ButtonShowcase } from "@/components/showcase/button";
import { BadgeShowcase } from "@/components/showcase/badge";
import { InputShowcase } from "@/components/showcase/input";
import { ToggleShowcase } from "@/components/showcase/toggle";
import { SegmentedShowcase } from "@/components/showcase/segmented";
import { CardShowcase } from "@/components/showcase/card";
import { AvatarShowcase } from "@/components/showcase/avatar";
import { ProgressShowcase } from "@/components/showcase/progress";
import { TooltipShowcase } from "@/components/showcase/tooltip";
import { DialogShowcase } from "@/components/showcase/dialog";
import { TableShowcase } from "@/components/showcase/table";
import { SkeletonShowcase } from "@/components/showcase/skeleton";

export const demos: Record<string, ReactNode> = {
  button: <ButtonShowcase />,
  badge: <BadgeShowcase />,
  input: <InputShowcase />,
  toggle: <ToggleShowcase />,
  segmented: <SegmentedShowcase />,
  card: <CardShowcase />,
  avatar: <AvatarShowcase />,
  progress: <ProgressShowcase />,
  tooltip: <TooltipShowcase />,
  dialog: <DialogShowcase />,
  table: <TableShowcase />,
  skeleton: <SkeletonShowcase />,
};
