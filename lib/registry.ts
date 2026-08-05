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
      "Three variants — solid, outline and ghost — across three sizes. The workhorse of any interface, kept quiet so the content can speak.",
    tags: ["action", "form"],
  },
  {
    slug: "badge",
    name: "Badge",
    description:
      "Small status pills with a mono voice. Tones for every state: neutral, live, beta and archived.",
    tags: ["status", "data"],
  },
  {
    slug: "input",
    name: "Input",
    description:
      "A labelled field with hints, errors and focus rings that respect the palette. Nothing fancy, everything considered.",
    tags: ["form"],
  },
  {
    slug: "toggle",
    name: "Toggle",
    description:
      "A switch that stays out of the way until you need it. Accessible by role, honest about its state.",
    tags: ["input", "form"],
  },
  {
    slug: "segmented",
    name: "Segmented Control",
    description:
      "A pill group for switching between a few related views. The selected state uses the same ink as the primary button.",
    tags: ["navigation", "input"],
  },
  {
    slug: "card",
    name: "Card",
    description:
      "A bordered surface with a title, mono meta and room for content. Composable enough to work as a bento tile.",
    tags: ["layout", "surface"],
  },
  {
    slug: "avatar",
    name: "Avatar",
    description:
      "Initials in a rotating set of tones. Degrades gracefully — no image, no drama.",
    tags: ["identity", "data"],
  },
  {
    slug: "progress",
    name: "Progress",
    description:
      "A slim bar with a mono readout and a patient easing curve. Reports its value without shouting.",
    tags: ["feedback", "data"],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description:
      "A quiet helper that appears above, with a little arrow and no lag. Keyboard friendly by design.",
    tags: ["feedback", "overlay"],
  },
  {
    slug: "dialog",
    name: "Dialog",
    description:
      "A focused modal for decisions. Esc to dismiss, click outside to cancel, and a backdrop that blurs the world away.",
    tags: ["overlay"],
  },
  {
    slug: "table",
    name: "Table",
    description:
      "Data in rows that respect the rhythm — mono headers, quiet separators, status badges where they belong.",
    tags: ["data", "layout"],
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description:
      "Loading shapes that pulse instead of flicker. Circles, lines and rectangles that preview the final layout.",
    tags: ["feedback", "loading"],
  },
];

export function getComponent(slug: string): ComponentMeta | undefined {
  return components.find((component) => component.slug === slug);
}
