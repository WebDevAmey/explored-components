import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AsciiBouncingBall, AsciiRain } from "@/components/ascii-animations";
import { site } from "@/lib/site";
import { components } from "@/lib/registry";

export default function Home() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] animate-[orb-float_16s_ease-in-out_infinite] rounded-full bg-olive-300/25 blur-3xl dark:bg-olive-700/15" />
        <div className="absolute -right-40 bottom-1/4 h-[24rem] w-[24rem] animate-[orb-float_19s_ease-in-out_infinite_reverse] rounded-full bg-olive-400/20 blur-3xl dark:bg-olive-600/15" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/2 left-6 2xl:left-[calc(50vw-500px)] hidden -translate-y-1/2 lg:flex flex-col items-center gap-8"
      >
        <div className="relative h-16 w-16 animate-[side-spin_18s_linear_infinite] rounded-full border border-olive-300/60 dark:border-olive-600/30">
          <span className="absolute left-1/2 -top-[3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-olive-500 dark:bg-olive-400" />
        </div>
        <div className="relative h-20 w-20">
          <span className="absolute left-0 top-4 h-1 w-1 animate-[starlight-twinkle_3s_ease-in-out_infinite] rounded-full bg-olive-400/70 dark:bg-olive-500/60" />
          <span className="absolute right-0 top-10 h-1.5 w-1.5 animate-[starlight-twinkle_2.6s_ease-in-out_infinite_1.1s] rounded-full bg-olive-500/60 dark:bg-olive-400/50" />
          <span className="absolute bottom-1 left-4 h-[3px] w-[3px] animate-[starlight-twinkle_2.2s_ease-in-out_infinite_2s] rounded-full bg-olive-400/80 dark:bg-olive-500/70" />
        </div>
        <AsciiBouncingBall />
        <p className="animate-[side-drift_7s_ease-in-out_infinite] [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-olive-400/80 dark:text-olive-500/60">
          Component showcase
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/2 right-6 2xl:right-[calc(50vw-500px)] hidden -translate-y-1/2 lg:flex flex-col items-center gap-8"
      >
        <p className="animate-[side-drift_8s_ease-in-out_infinite_0.6s] [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-olive-400/80 dark:text-olive-500/60">
          UI component library
        </p>
        <AsciiRain />
        <div className="relative h-20 w-20">
          <span className="absolute left-0 top-10 h-1.5 w-1.5 animate-[starlight-twinkle_2.8s_ease-in-out_infinite_0.4s] rounded-full bg-olive-500/60 dark:bg-olive-400/50" />
          <span className="absolute right-2 top-2 h-1 w-1 animate-[starlight-twinkle_2.4s_ease-in-out_infinite_1.6s] rounded-full bg-olive-400/70 dark:bg-olive-500/60" />
          <span className="absolute bottom-2 left-6 h-[3px] w-[3px] animate-[starlight-twinkle_3.2s_ease-in-out_infinite_0.9s] rounded-full bg-olive-400/80 dark:bg-olive-500/70" />
        </div>
        <div className="relative h-12 w-12 animate-[side-spin_24s_linear_infinite_reverse] rounded-full border border-dashed border-olive-300/60 dark:border-olive-600/30">
          <span className="absolute -bottom-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-olive-500 dark:bg-olive-400" />
        </div>
      </div>

      <div className="flex justify-center py-10 relative z-10">
        <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">
        <div className="animate-in w-full">
          <ThemeProvider>
            <Nav count={components.length} />
          </ThemeProvider>
        </div>

        <div className="font-normal min-w-full relative shrink-0 text-olive-800 dark:text-olive-100 text-sm/6 text-justify flex flex-col gap-4">
          {site.intro.map((paragraph, index) => (
            <p key={index} className={`animate-in animate-delay-${index + 1}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="animate-in animate-delay-3 w-full">
          <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
            <p className="text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono">
              Components
            </p>
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              {components.map((component) => (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="flex items-center justify-between relative shrink-0 text-justify text-nowrap w-full whitespace-pre group"
                >
                  <p className="link--metis font-semibold relative shrink-0 text-olive-800 dark:text-olive-100 text-sm">
                    {component.name}
                  </p>
                  <div className="flex items-center gap-3 min-w-0">
                    <p className="truncate text-xs text-olive-500 dark:text-olive-400 text-justify whitespace-pre">
                      / {component.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-in animate-delay-4 w-full">
          <Footer />
        </div>
        </div>
      </div>
    </div>
  );
}
