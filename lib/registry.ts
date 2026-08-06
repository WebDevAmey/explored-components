export type ComponentSection = "core" | "recreated";

export type ComponentMeta = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  section: ComponentSection;
};

export const components: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    description:
      "Three animated signatures — an expanding pill that swallows a send arrow, a starlight button that types through its states with a 3D letter flip, and a rainbow border that loops while you hover.",
    tags: ["action", "form"],
    section: "core",
  },
  {
    slug: "preview-optimizations",
    name: "Built-in Optimizations",
    description:
      "Three windows, three viewport sizes — image, font and script optimizations recreated as a card with a shine that sweeps on hover.",
    tags: ["optimization", "preview"],
    section: "recreated",
  },
  {
    slug: "preview-responsive",
    name: "Responsive Card",
    description:
      "A device switcher that springs between desktop, tablet and mobile — pointer glow, twinkling dots and a frame that morphs to fit.",
    tags: ["responsive", "preview"],
    section: "recreated",
  },
];

export function getComponent(slug: string): ComponentMeta | undefined {
  return components.find((component) => component.slug === slug);
}
