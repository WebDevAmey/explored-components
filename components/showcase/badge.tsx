type Tone = "neutral" | "success" | "warning" | "danger";

const tones: Record<Tone, string> = {
  neutral:
    "bg-olive-200 dark:bg-olive-700 text-olive-700 dark:text-olive-200",
  success: "bg-green-500/10 text-green-500 border border-green-500/30",
  warning: "bg-yellow-300/20 text-yellow-300 border border-yellow-300/40",
  danger: "bg-red-500/10 text-red-500 border border-red-500/30",
};

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function BadgeShowcase() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>Neutral</Badge>
      <Badge tone="success">Live</Badge>
      <Badge tone="warning">Beta</Badge>
      <Badge tone="danger">Archived</Badge>
      <Badge>
        <span className="mr-1 inline-block size-1 rounded-full bg-current" />
        In progress
      </Badge>
    </div>
  );
}
