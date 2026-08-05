"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "idle" | "generating" | "generated";

const PHASES: { phase: Phase; text: string }[] = [
  { phase: "idle", text: "Generate" },
  { phase: "generating", text: "Generating" },
  { phase: "generated", text: "Generated" },
];

const LETTER_DELAY_MS = 30;
const GENERATE_DURATION_MS = 2000;
const RESET_AFTER_MS = 1500;

function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ transitionDelay: `${index * LETTER_DELAY_MS}ms` }}
          className="inline-block transition-[transform_350ms_cubic-bezier(0.34,1.56,0.64,1),opacity_300ms_ease]"
        >
          {char}
        </span>
      ))}
    </>
  );
}

export default function StarlightGenerateBtn() {
  const [phase, setPhase] = useState<Phase>("idle");
  const runId = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPendingTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => clearPendingTimeout, [clearPendingTimeout]);

  const handlePress = () => {
    if (phase === "generating") return;

    clearPendingTimeout();
    const id = ++runId.current;
    setPhase("generating");

    timeoutRef.current = setTimeout(() => {
      if (id !== runId.current) return;
      setPhase("generated");

      timeoutRef.current = setTimeout(() => {
        if (id !== runId.current) return;
        setPhase("idle");
      }, RESET_AFTER_MS);
    }, GENERATE_DURATION_MS);
  };

  const phaseIndex = PHASES.findIndex((entry) => entry.phase === phase);
  const generating = phase === "generating";
  const generated = phase === "generated";

  return (
    <button
      type="button"
      aria-busy={generating || undefined}
      className={`relative inline-flex cursor-pointer items-center gap-2 rounded-full border px-[22px] py-[10px] text-sm font-semibold text-[#e7defb] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_3px_0_0_#050308,0_8px_14px_rgba(0,0,0,0.4)] transition-[background-color_300ms_ease,border-color_300ms_ease,transform_150ms_ease,box-shadow_150ms_ease,scale_150ms_ease] active:scale-[0.985] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_0_0_#050308,0_4px_8px_rgba(0,0,0,0.35)] ${
        generated ? "border-[#c9a6ff] bg-[#c9a6ff]" : "border-[#3a3440] bg-[#121014]"
      }`}
      onClick={handlePress}
    >
      <span
        className={`relative flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-transparent transition-[border-color_300ms_ease] before:absolute before:inset-[-4px] before:rounded-full before:border-[1.5px] before:border-transparent before:border-t-[#c9a6ff] before:opacity-0 ${
          generating ? "before:animate-[starlight-spin_0.9s_linear_infinite] before:opacity-100" : ""
        } ${generated ? "border-[#1b1420]" : ""}`}
      >
        <svg
          className={`absolute inset-0 m-auto h-3 w-3 text-[#c9a6ff] transition-[transform_300ms_cubic-bezier(0.34,1.56,0.64,1),opacity_200ms_ease,scale_300ms_cubic-bezier(0.34,1.56,0.64,1)] ${
            generating
              ? "animate-none"
              : generated
                ? "animate-none opacity-0 scale-[0.5]"
                : "animate-[starlight-twinkle_2.4s_ease-in-out_infinite]"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z" />
        </svg>
        <svg
          className={`absolute inset-0 m-auto h-3 w-3 text-[#1b1420] transition-[transform_300ms_cubic-bezier(0.34,1.56,0.64,1),opacity_200ms_ease,scale_300ms_cubic-bezier(0.34,1.56,0.64,1)] ${
            generated ? "scale-100 opacity-100" : "scale-[0.5] opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 12 9 17 20 6" />
        </svg>
      </span>
      <span className="relative inline-flex h-[1.3em] w-[7em] items-center justify-center [perspective:200px]">
        {PHASES.map(({ phase: wordPhase, text }, index) => {
          const state =
            index === phaseIndex
              ? "[&_span]:opacity-100 [&_span]:[transform:rotateX(0deg)]"
              : index < phaseIndex
                ? "[&_span]:opacity-0 [&_span]:[transform:rotateX(90deg)]"
                : "[&_span]:opacity-0 [&_span]:[transform:rotateX(-90deg)]";
          return (
            <span
              key={wordPhase}
              className={`absolute left-0 top-0 flex h-full w-full items-center justify-center text-sm font-semibold transition-colors duration-300 ${state} ${
                generated ? "text-[#1b1420]" : "text-[#e7defb]"
              }`}
            >
              <Letters text={text} />
            </span>
          );
        })}
      </span>
    </button>
  );
}
