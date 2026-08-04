# Component Showcase

A quiet, tasteful showcase of components I've designed and built — layout
inspired by [designerdada.com](https://www.designerdada.com). Built with
Next.js 16, Tailwind CSS v4, and three voices: Schibsted Grotesk for reading,
IM Fell Great Primer for italic flourishes, Sono for mono meta.

## Run

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Add a new component

Three steps, all small:

1. **Build the demo** — create `components/showcase/my-thing.tsx` exporting a
   `MyThingShowcase` component (a small cluster showing off the variants).
   Add `"use client"` at the top if it has state or handlers.

2. **Register metadata** — add an entry to `lib/registry.ts`:

   ```ts
   {
     slug: "my-thing",
     name: "My Thing",
     description: "One tasteful sentence about what it does.",
     date: "05.Aug.2026",
     tags: ["input", "form"],
   }
   ```

3. **Wire up the demo** — add `myThing: <MyThingShowcase />` to the `demos`
   map in `components/demos.tsx`.

That's it. The home page lists it, and `/components/my-thing` renders the
demo automatically.

## Customize

- **Your name, handle, intro, links** — `lib/site.ts`
- **Palette, fonts, animations** — `app/globals.css` and `app/layout.tsx`
