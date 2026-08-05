"use client";

import { ExpandingPillSend } from "@/components/showcase/expanding-pill-send";
import StarlightGenerateBtn from "@/components/showcase/starlight-generate-btn";
import { DisplayCard } from "@/components/showcase/display-card";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center rounded-lg font-medium transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  solid:
    "bg-olive-950 dark:bg-olive-100 text-olive-50 dark:text-olive-800 hover:opacity-80",
  outline:
    "border border-olive-500 dark:border-olive-400/30 text-olive-800 dark:text-olive-100 hover:border-olive-950 dark:hover:border-olive-100",
  ghost:
    "text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 hover:bg-olive-200/60 dark:hover:bg-olive-700/50",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export function Button({
  variant = "solid",
  size = "md",
  children,
  ...props
}: {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      <span className="relative inline-block">
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"
        />
      </span>
    </button>
  );
}

export function ButtonShowcase() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <DisplayCard
        name="Expanding Pill Send"
        description="A pill that grows, swallows the arrow, and exhales — a send that commits."
      >
        <ExpandingPillSend />
      </DisplayCard>
      <DisplayCard
        name="Starlight Generate"
        description="Types through generate, generating and generated with a 3D letter flip."
      >
        <StarlightGenerateBtn />
      </DisplayCard>
    </div>
  );
}
