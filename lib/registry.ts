export type ComponentMeta = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
};

export const components: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    description:
      "Three animated signatures — an expanding pill that swallows a send arrow, a starlight button that types through its states with a 3D letter flip, and a rainbow border that loops while you hover.",
    tags: ["action", "form"],
  },
  {
    slug: "recreated-components",
    name: "Recreated-components",
    description:
      "Built-in Optimizations — image, font and script optimization windows with a shine that sweeps on hover — and Responsive Card, a device switcher that springs between desktop, tablet and mobile.",
    tags: ["optimization", "responsive", "preview"],
  },
];

export function getComponent(slug: string): ComponentMeta | undefined {
  return components.find((component) => component.slug === slug);
}
