'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Navigation',
    items: [
      {
        title: 'Introduction',
        href: '/docs/overview',
      }
    ],
  },
  {
    title: 'Nav2',
    items: [
      {
        title: 'Some stuff',
        href: '/docs/components',
      }
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {navigation.map((section, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {section.title}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                  item.disabled && 'cursor-not-allowed opacity-60',
                  pathname === item.href
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground'
                )}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
