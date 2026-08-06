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
];

export function getComponent(slug: string): ComponentMeta | undefined {
  return components.find((component) => component.slug === slug);
}
