import { Navigation } from '@/components/markdoc/Navigation';
import { ThemeProvider } from "@/components/theme-provider";
import '@/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <aside className="w-64 border-r bg-background flex-shrink-0 md:block hidden">
              <Navigation />
            </aside>
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const siteConfig = {
  name: "MAIN LAYOUT",
  description: "XXX",
  mainNav: [
    {
      title: "YYY",
      href: "/docs",
    },
    {
      title: "API XXX",
      href: "/docs/api-reference",
    },
    {
      title: "DDD",
      href: "/docs/examples",
    },
  ],
  links: {
    github: "https://github.com/yourusername/beacon",
    docs: "/docs",
  },
}

