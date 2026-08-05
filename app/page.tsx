import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import { components } from "@/lib/registry";

export default function Home() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
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
                  <p className="font-semibold relative shrink-0 text-olive-800 dark:text-olive-100 text-sm group-hover:underline underline-offset-4">
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
  );
}
