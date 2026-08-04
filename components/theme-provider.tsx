"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let theme: Theme = typeof window === "undefined" ? "light" : getInitialTheme();
const listeners = new Set<() => void>();
let transitioning = false;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot() {
  return theme;
}

function applyTheme(next: Theme) {
  theme = next;
  localStorage.setItem("theme", next);

  const apply = () =>
    document.documentElement.classList.toggle("dark", next === "dark");

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (
    typeof document !== "undefined" &&
    "startViewTransition" in document &&
    !transitioning &&
    !reducedMotion
  ) {
    transitioning = true;
    const transition = document.startViewTransition(apply);
    transition.finished.catch(() => {}).finally(() => {
      transitioning = false;
    });
  } else {
    apply();
  }

  listeners.forEach((listener) => listener());
}

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, getSnapshot, () => "light");

  const toggleTheme = useCallback(
    () => applyTheme(theme === "light" ? "dark" : "light"),
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
