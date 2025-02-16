import Link from "next/link"

interface NavItem {
  title: string
  href: string
}

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="flex gap-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:text-foreground/80"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
} 