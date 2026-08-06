import type { Transition } from "motion/react";

export const springTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

export const pillTransition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 40,
};
