export function Skeleton({
  className = "",
  variant = "text",
}: {
  className?: string;
  variant?: "text" | "circle" | "rect";
}) {
  const shape =
    variant === "circle"
      ? "rounded-full"
      : variant === "rect"
        ? "rounded-lg"
        : "rounded";
  return (
    <div
      className={`${shape} bg-olive-200 dark:bg-olive-700 animate-pulse ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkeletonShowcase() {
  return (
    <div className="w-full max-w-md rounded-lg border border-olive-300 dark:border-olive-700 bg-white dark:bg-olive-900 p-5">
      <div className="flex items-center gap-3">
        <Skeleton variant="circle" className="size-10" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <Skeleton className="mt-5 h-3 w-full" />
      <Skeleton className="mt-2 h-3 w-full" />
      <Skeleton className="mt-2 h-3 w-2/3" />
      <div className="mt-5 flex justify-end">
        <Skeleton variant="rect" className="h-8 w-24" />
      </div>
    </div>
  );
}
