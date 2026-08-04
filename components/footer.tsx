import { site } from "@/lib/site";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full pb-4">
      <p className="font-serif italic text-lg text-olive-500 dark:text-olive-400 text-center">
        Built with Next.js, Tailwind, and a little taste.
      </p>
      <p className="font-mono text-xs uppercase text-olive-400 dark:text-olive-500">
        {site.name} · {new Date().getFullYear()}
      </p>
    </div>
  );
}
