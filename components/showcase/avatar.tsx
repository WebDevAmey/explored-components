const palette = [
  { bg: "bg-olive-300 dark:bg-olive-600", fg: "text-olive-900 dark:text-olive-100" },
  { bg: "bg-yellow-300", fg: "text-olive-900" },
  { bg: "bg-green-500/15 border border-green-500/30", fg: "text-green-500" },
  { bg: "bg-red-500/10 border border-red-500/30", fg: "text-red-500" },
  { bg: "bg-olive-950 dark:bg-olive-100", fg: "text-olive-50 dark:text-olive-900" },
];

export function Avatar({
  name,
  className = "",
  index = 0,
}: {
  name: string;
  className?: string;
  index?: number;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const tone = palette[index % palette.length];

  return (
    <span
      className={`inline-flex size-10 items-center justify-center rounded-full font-medium text-sm ${tone.bg} ${tone.fg} ${className}`}
      title={name}
    >
      {initials}
    </span>
  );
}

export function AvatarShowcase() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {["Amey Tarmale", "Ada Lovelace", "Grace Hopper", "Katherine Johnson", "Linus Torvalds"].map(
        (name, i) => (
          <Avatar key={name} name={name} index={i} />
        ),
      )}
    </div>
  );
}
