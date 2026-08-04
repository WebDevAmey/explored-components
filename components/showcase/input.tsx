"use client";

import { useState } from "react";

export function Field({
  label,
  hint,
  error,
  ...props
}: {
  label: string;
  hint?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block w-full">
      <span className="mb-1 block text-xs text-olive-500 dark:text-olive-400">
        {label}
      </span>
      <input
        className={`w-full rounded-lg border bg-transparent px-4 py-2 text-olive-800 dark:text-olive-100 placeholder:text-olive-400 dark:placeholder:text-olive-500 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500/20"
            : "border-olive-500 dark:border-olive-400/30 focus:border-olive-950 dark:focus:border-olive-100 focus:ring-olive-950/20 dark:focus:ring-olive-100/20"
        }`}
        {...props}
      />
      {error ? (
        <span className="mt-1 block text-xs text-red-500">{error}</span>
      ) : hint ? (
        <span className="mt-1 block text-xs text-olive-400 dark:text-olive-500">
          {hint}
        </span>
      ) : null}
    </label>
  );
}

export function InputShowcase() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const touched = name.trim().length > 0;

  return (
    <div className="grid w-full max-w-md gap-4">
      <Field
        label="Name"
        placeholder="Ada Lovelace"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={touched && name.trim().length < 2 ? "Name is too short." : undefined}
      />
      <Field
        label="Email"
        type="email"
        placeholder="you@youremail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        hint="We'll never share your email."
      />
      <Field label="Disabled" placeholder="Can't touch this" disabled />
    </div>
  );
}
