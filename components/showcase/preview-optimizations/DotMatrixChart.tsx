"use client";

import { useId, useMemo } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const MOUNTAIN_PATH =
  "M36.5858 4.91421L0.585786 40.9142C0.210714 41.2893 0 41.798 0 42.3284V85.5C0 86.6046 0.89543 87.5 2 87.5H182C183.105 87.5 184 86.6046 184 85.5V50.8284C184 49.0466 181.846 48.1543 180.586 49.4142L179.586 50.4142C179.211 50.7893 179 51.298 179 51.8284V59.1716C179 59.702 178.789 60.2107 178.414 60.5858L177.586 61.4142C177.211 61.7893 176.702 62 176.172 62H165.328C164.798 62 164.289 62.2107 163.914 62.5858L155.914 70.5858C155.133 71.3668 153.867 71.3668 153.086 70.5858L133.914 51.4142C133.133 50.6332 131.867 50.6332 131.086 51.4142L127.914 54.5858C127.133 55.3668 125.867 55.3668 125.086 54.5858L119 48.5L90.4142 19.9142C89.6332 19.1332 88.3668 19.1332 87.5858 19.9142L72.4142 35.0858C71.6332 35.8668 70.3668 35.8668 69.5858 35.0858L39.4142 4.91421C38.6332 4.13317 37.3668 4.13316 36.5858 4.91421Z";

const PITCH = 6;
const COLS = Math.floor(184 / PITCH);
const ROWS = Math.floor(88 / PITCH);

const SPHERE_CX = 174;
const SPHERE_CY = 8.5;
const SPHERE_R = 8;
const SPHERE_PITCH = 2;
const SPHERE_DOT_SIZE = 1.1;
const SPHERE_BAR_THICKNESS = 2.2;

interface Dot {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

function makeDot(seed: number, x: number, y: number, size: number): Dot {
  return {
    x,
    y,
    size,
    delay: Number((seededRandom(seed) * -3).toFixed(3)),
    duration: Number((1.8 + seededRandom(seed + 0.5) * 1.6).toFixed(3)),
  };
}

function buildSphereDots(shape: "circle" | "plus", seedStart: number) {
  const dots: Dot[] = [];
  let seed = seedStart;
  const range = SPHERE_R + 2;
  for (let y = -range; y <= range; y += SPHERE_PITCH) {
    for (let x = -range; x <= range; x += SPHERE_PITCH) {
      seed += 1;
      const included =
        shape === "circle"
          ? x * x + y * y <= SPHERE_R * SPHERE_R
          : Math.abs(x) <= SPHERE_BAR_THICKNESS / 2 ||
            Math.abs(y) <= SPHERE_BAR_THICKNESS / 2;
      if (!included) continue;
      dots.push(makeDot(seed, SPHERE_CX + x, SPHERE_CY + y, SPHERE_DOT_SIZE));
    }
  }
  return dots;
}

interface DotMatrixChartProps {
  width: number;
  height: number;
  dotSize: number;
  isHovered: boolean;
  sphereShape: "circle" | "plus";
}

export function DotMatrixChart({
  width,
  height,
  dotSize,
  isHovered,
  sphereShape,
}: DotMatrixChartProps) {
  const uid = useId();
  const clipId = `dot-matrix-clip-${uid}`;

  const chartDots = useMemo(() => {
    const grid: Dot[] = [];
    let seed = 0;
    for (let row = 0; row <= ROWS; row++) {
      for (let col = 0; col <= COLS; col++) {
        seed += 1;
        grid.push(makeDot(seed, col * PITCH, row * PITCH, dotSize));
      }
    }
    return grid;
  }, [dotSize]);

  const sphereDots = useMemo(
    () => buildSphereDots(sphereShape, 10000),
    [sphereShape],
  );

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 184 88"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={MOUNTAIN_PATH} />
        </clipPath>
      </defs>
      {sphereDots.map((dot, i) => (
        <rect
          key={`sphere-${i}`}
          x={dot.x - dot.size / 2}
          y={dot.y - dot.size / 2}
          width={dot.size}
          height={dot.size}
          fill="#fff"
          opacity={0.6}
          style={{
            animationName: "dot-twinkle",
            animationDuration: `${dot.duration}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${dot.delay}s`,
            animationPlayState: isHovered ? "running" : "paused",
          }}
        />
      ))}
      <g clipPath={`url(#${clipId})`}>
        {chartDots.map((dot, i) => (
          <rect
            key={i}
            x={dot.x}
            y={dot.y}
            width={dot.size}
            height={dot.size}
            fill="#fff"
            style={{
              animationName: "dot-twinkle",
              animationDuration: `${dot.duration}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${dot.delay}s`,
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
        ))}
      </g>
    </svg>
  );
}
