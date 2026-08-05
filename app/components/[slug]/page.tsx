import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ShowcaseFrame from "@/components/showcase-frame";
import { ThemeProvider } from "@/components/theme-provider";
import { demos } from "@/components/demos";
import { components, getComponent } from "@/lib/registry";

type Props = PageProps<"/components/[slug]">;

export function generateStaticParams() {
  return components.map((component) => ({ slug: component.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) return {};
  return {
    title: component.name,
    description: component.description,
  };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) notFound();

  const demo = demos[component.slug];

  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">
        <div className="animate-in w-full">
          <ThemeProvider>
            <Nav count={components.length} />
          </ThemeProvider>
        </div>

        <div className="animate-in animate-delay-1 w-full flex flex-col gap-4">
          <Link
            href="/"
            className="link font-normal relative shrink-0 text-sm text-olive-500 hover:text-olive-800 dark:text-olive-500 dark:hover:text-olive-100"
          >
            ← All components
          </Link>

          <h1 className="text-2xl font-medium text-olive-800 dark:text-olive-100">
            {component.name}
          </h1>

          <p className="text-sm/6 text-justify text-olive-600 dark:text-olive-300">
            {component.description}
          </p>
        </div>

        <div className="animate-in animate-delay-2 w-full">
          <ShowcaseFrame
            caption={component.tags.join(" · ")}
          >
            {demo}
          </ShowcaseFrame>
        </div>

        <div className="animate-in animate-delay-3 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
