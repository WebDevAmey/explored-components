"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/showcase/button";

export function Dialog({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-olive-950/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-md rounded-xl bg-olive-100 dark:bg-olive-900 p-6 shadow-lg"
      >
        <div className="mb-2 flex items-start justify-between gap-4">
          <h2 className="text-lg font-medium text-olive-800 dark:text-olive-100">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer rounded-full bg-olive-200 dark:bg-olive-700 p-2 text-olive-600 dark:text-olive-300 transition-colors hover:bg-olive-300 hover:text-olive-800 dark:hover:bg-olive-600 dark:hover:text-olive-100"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1.5 1.5l9 9m0-9l-9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm/6 text-justify text-olive-600 dark:text-olive-300">
          {children}
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Confirm</Button>
        </div>
      </div>
    </div>
  );
}

export function DialogShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <p className="font-mono text-[10px] uppercase text-olive-400 dark:text-olive-500">
        Esc or click outside to close
      </p>
      {open && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm archive"
        >
          This component will be moved to the archive. You can restore it
          anytime, but it will stay out of the showcase until then.
        </Dialog>
      )}
    </div>
  );
}
