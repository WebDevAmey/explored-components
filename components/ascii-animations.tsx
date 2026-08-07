"use client";

import { useEffect, useState } from "react";

const asciiClass =
  "font-mono text-[9px] leading-[11px] text-olive-400/70 dark:text-olive-500/60";

export function AsciiBouncingBall({
  width = 15,
  height = 6,
}: {
  width?: number;
  height?: number;
}) {
  const [frame, setFrame] = useState({ x: 1, y: 1, vx: 1, vy: 1 });

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => {
        let { x, y, vx, vy } = f;
        x += vx;
        y += vy;
        if (x <= 0 || x >= width - 1) {
          vx = -vx;
          x = x <= 0 ? 0 : width - 1;
        }
        if (y <= 0 || y >= height - 1) {
          vy = -vy;
          y = y <= 0 ? 0 : height - 1;
        }
        return { x, y, vx, vy };
      });
    }, 60);
    return () => clearInterval(id);
  }, [width, height]);

  const rows: string[] = [];
  for (let yy = 0; yy < height; yy++) {
    let row = "";
    for (let xx = 0; xx < width; xx++) {
      row += xx === frame.x && yy === frame.y ? "o" : "·";
    }
    rows.push(row);
  }

  return <pre className={asciiClass}>{rows.join("\n")}</pre>;
}

const RAIN_CHARS = "◦UI·*0123456789".split("");

export function AsciiRain({ rows = 16 }: { rows?: number }) {
  const [column, setColumn] = useState<string[]>(() =>
    Array.from({ length: rows }, () => "·"),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setColumn((prev) => {
        const head =
          Math.random() < 0.65
            ? RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)]
            : "·";
        return [head, ...prev.slice(0, rows - 1)];
      });
    }, 70);
    return () => clearInterval(id);
  }, [rows]);

  return <pre className={asciiClass}>{column.join("\n")}</pre>;
}
