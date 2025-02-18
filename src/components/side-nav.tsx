"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Get started",
    links: [
      { href: "/docs/overview", label: "What is Markdoc?" },
      { href: "/docs/getting-started", label: "Installation" },
      { href: "/docs/faq", label: "FAQ" },
      { href: "/sandbox", label: "Try it out" },
    ],
  },
  {
    title: "Core concepts",
    links: [
      { href: "/docs/syntax", label: "Syntax and schema" },
      { href: "/docs/nodes", label: "Nodes" },
      { href: "/docs/tags", label: "Tags" },
      { href: "/docs/attributes", label: "Attributes" },
      { href: "/docs/variables", label: "Variables" },
      { href: "/docs/functions", label: "Functions" },
      { href: "/docs/render", label: "Rendering" },
      { href: "/docs/config", label: "Config objects" },
      { href: "/docs/validation", label: "Validation" },
    ],
  },
];

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle Button (hidden on md+) */}
      <button
        className="md:hidden p-4 text-lg font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Menu
      </button>

      {/* Desktop Sidebar (md+): always visible, fixed on left */}
      <aside
        className="
          hidden 
          md:block 
          fixed top-0 left-0 w-64 h-full
          bg-white border-r shadow-lg dark:bg-gray-900 dark:border-gray-800
        "
      >
        {/* Nav content */}
        <nav className="p-4">
          {items.map((item) => (
            <div key={item.title} className="mb-6">
              <h3 className="text-gray-600 dark:text-gray-300 font-medium">
                {item.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block p-2 rounded ${
                        pathname === link.href
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay (shown if isOpen = true) */}
      {isOpen && (
        <aside
          className="
            md:hidden 
            fixed top-0 left-0 w-64 h-full 
            bg-white border-r shadow-lg dark:bg-gray-900 dark:border-gray-800
            z-50
          "
        >
          <button
            className="p-4 text-lg font-bold w-full text-left"
            onClick={() => setIsOpen(false)}
          >
            ✕ Close
          </button>
          <nav className="p-4">
            {items.map((item) => (
              <div key={item.title} className="mb-6">
                <h3 className="text-gray-600 dark:text-gray-300 font-medium">
                  {item.title}
                </h3>
                <ul className="mt-2 space-y-2">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block p-2 rounded ${
                          pathname === link.href
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
}
