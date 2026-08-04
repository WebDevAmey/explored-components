import { Badge } from "@/components/showcase/badge";

export function Card({
  title,
  meta,
  children,
  footer,
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-olive-300 dark:border-olive-700 bg-white dark:bg-olive-900 p-5 w-full">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-olive-800 dark:text-olive-100 text-sm">
          {title}
        </h3>
        {meta && (
          <span className="font-mono text-[10px] uppercase text-olive-400 dark:text-olive-500 whitespace-nowrap">
            {meta}
          </span>
        )}
      </div>
      <p className="text-sm text-olive-500 dark:text-olive-400 leading-6 text-justify">
        {children}
      </p>
      {footer && <div className="mt-1 flex items-center gap-2">{footer}</div>}
    </div>
  );
}

export function CardShowcase() {
  return (
    <div className="grid w-full max-w-md gap-4 sm:grid-cols-2">
      <Card title="Design tokens" meta="v2.1">
        A single source of truth — olive palette, type scale, and spacing that
        keep every surface feeling like the same product.
        <div className="mt-3">
          <Badge tone="success">Shipped</Badge>
        </div>
      </Card>
      <Card title="Motion library" meta="in progress">
        Subtle ease curves and duration tokens so interactions feel soft rather
        than springy.
        <div className="mt-3">
          <Badge>Draft</Badge>
        </div>
      </Card>
    </div>
  );
}
