// Source: https://github.com/shadcn/ui/blob/main/apps/www/components/toc.tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface TocItem {
  title: string
  url: string
  items?: TocItem[]
}

interface TableOfContentsProps {
  items: TocItem[]
}

interface TreeItem {
  id: string
  title: string
  children?: TreeItem[]
}

interface TreeProps {
  tree: TreeItem[]
  level?: number
  activeItem?: string | null
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const itemIds = React.useMemo(() => {
    return items.flatMap(item => [item.url, ...(item.items?.map(i => i.url) || [])])
      .map(url => url.replace('#', ''))
  }, [items])

  const activeId = useActiveItem(itemIds)

  const treeItems = React.useMemo(() => {
    return items.map(item => ({
      id: item.url.replace('#', ''),
      title: item.title,
      children: item.items?.map(subItem => ({
        id: subItem.url.replace('#', ''),
        title: subItem.title
      }))
    }))
  }, [items])

  return <Tree tree={treeItems} activeItem={activeId} />
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.length ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => {
        const hasChildren = item.children && item.children.length > 0

        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={`#${item.id}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                `#${item.id}` === `#${activeItem}`
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {hasChildren && level < 3 && (
              <Tree
                tree={item.children as TreeItem[]}
                level={level + 1}
                activeItem={activeItem}
              />
            )}
          </li>
        )
      })}
    </ul>
  ) : null
}
