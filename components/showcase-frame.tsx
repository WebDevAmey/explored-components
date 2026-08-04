export default function ShowcaseFrame({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex min-h-64 w-full items-center justify-center overflow-hidden rounded-lg border border-olive-300 dark:border-olive-700 bg-olive-50 dark:bg-olive-950 px-4 py-10">
        {children}
      </div>
      {caption && (
        <p className="font-mono text-[10px] uppercase tracking-wide text-olive-400 dark:text-olive-500 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
