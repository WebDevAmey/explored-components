"use client";

import { useState } from "react";

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-olive-950/20 dark:focus:ring-olive-100/20 ${
        checked
          ? "bg-olive-950 dark:bg-olive-100"
          : "bg-olive-300 dark:bg-olive-600"
      }`}
    >
      <span
        className={`inline-block size-4 transform rounded-full bg-white dark:bg-olive-800 transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function ToggleShowcase() {
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-olive-800 dark:text-olive-100">
          Notifications
        </span>
        <Toggle
          checked={notifications}
          onChange={setNotifications}
          label="Toggle notifications"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-olive-800 dark:text-olive-100">
          Sound effects
        </span>
        <Toggle checked={sound} onChange={setSound} label="Toggle sound" />
      </div>
    </div>
  );
}
