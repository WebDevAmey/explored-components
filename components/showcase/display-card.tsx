export function DisplayCard({
  name,
  description,
  className,
  children,
}: {
  name: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`group/card flex h-full flex-col overflow-hidden rounded-3xl border border-olive-300 dark:border-olive-700 bg-olive-50 dark:bg-olive-950 ${className ?? ""}`}
    >
      <div className="relative m-2 mb-0 flex min-h-44 flex-1 items-center justify-center overflow-hidden rounded-[1.25rem] bg-olive-100/70 p-4 dark:bg-olive-900/70">
        <div className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:scale-[1.05]">
          {children}
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-3.5">
        <div className="min-w-0">
          <h3 className="truncate text-[0.95rem] font-semibold tracking-tight text-olive-800 dark:text-olive-100">
            {name}
          </h3>
          <p className="mt-0.5 line-clamp-1 text-xs leading-relaxed text-olive-500 dark:text-olive-400">
            {description}
          </p>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 -translate-x-1 text-olive-400 opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:translate-x-0 group-hover/card:opacity-100 dark:text-olive-500"
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </div>
    </article>
  );
}
