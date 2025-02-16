import { Theme } from "@code-hike/lighter"

export const siteConfig = {
  name: "Beacon Docs",
  description: "Documentation and API reference for the Beacon platform",
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "API Reference",
      href: "/docs/api-reference",
    },
    {
      title: "Examples",
      href: "/docs/examples",
    },
  ],
  links: {
    github: "https://github.com/yourusername/beacon",
    docs: "/docs",
  },
  highlighter: {
    theme: "monokai" as Theme,
    lineNumbers: true,
  },
} 