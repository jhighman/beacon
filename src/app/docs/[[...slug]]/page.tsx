import fs from "fs"
import path from "path"
import * as React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { slugifyWithCounter } from "@sindresorhus/slugify"
import { globby } from "globby"
import { ChevronRight } from "lucide-react"
import { z } from "zod"
import { parse } from "zod-matter"


import { components, config } from "@/config/markdoc.config"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TableOfContents } from "@/components/markdoc/table.of.contents"
import Markdoc from "@markdoc/markdoc"

// Constants
const CONTENT_DIR = path.join(process.cwd(), "content")

// Types
type PageParams = {
  slug: string[] | undefined
}

type PageProps = {
  params: PageParams
  searchParams: { [key: string]: string | string[] | undefined }
}

type GenerateMetadataProps = {
  params: PageParams
  searchParams: { [key: string]: string | string[] | undefined }
}

interface DocNode {
  name: string
  attributes: Record<string, unknown>
  children?: DocNode[]
}

interface TableOfContentsItem {
  title: string
  id: string
  level: number
  children: TableOfContentsItem[]
}

// Schema
const frontmatterSchema = z.object({
  title: z.string(),
  toc: z.boolean().optional().default(true),
})

// Utilities
function getNodeText(node: DocNode): string {
  return (node.children ?? []).reduce((text, child) => {
    if (typeof child === "string") return text + child
    return text + getNodeText(child)
  }, "")
}

function collectHeadings(nodes: DocNode[]): TableOfContentsItem[] {
  const slugify = slugifyWithCounter()
  const sections: TableOfContentsItem[] = []

  for (const node of nodes) {
    if (node.name === "Heading") {
      const title = getNodeText(node)
      if (title) {
        const id = slugify(title)
        const level = node.attributes.level as number
        node.attributes.id = id

        const item = { title, id, level, children: [] }

        if (level > 2) {
          const parent = sections[sections.length - 1]
          if (!parent) {
            throw new Error(
              `Cannot add 'h${level}' to table of contents without a preceding 'h${level - 1}'`
            )
          }
          parent.children.push(item)
        } else {
          sections.push(item)
        }
      }
    }

    if (node.children?.length) {
      sections.push(...collectHeadings(node.children))
    }
  }

  return sections
}

async function getMarkdownContent(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  const source = fs.readFileSync(filePath, "utf-8")
  const { data: frontmatter } = parse(source, frontmatterSchema)
  const ast = Markdoc.parse(source)
  const content = Markdoc.transform(ast, config)
  return { content, ...frontmatter }
}

// Next.js Configuration
export const dynamicParams = true

export async function generateStaticParams(): Promise<PageParams[]> {
  const contentPaths = await globby(CONTENT_DIR, {
    expandDirectories: { extensions: ["md"] },
  })
  return contentPaths.map((contentPath) => ({
    slug: [path.basename(contentPath, path.extname(contentPath))],
  }))
}

export async function generateMetadata(
  { params }: GenerateMetadataProps
): Promise<Metadata> {
  const slug = params.slug?.[0] ?? 'index'
  const { title } = await getMarkdownContent(slug)
  return { title }
}

// Page Component
export default async function DocsPage({ params }: PageProps) {
  const slug = params.slug?.[0] ?? 'index'
  const { title, toc, content } = await getMarkdownContent(slug)
  const tableOfContents = toc ? collectHeadings([content] as DocNode[]) : []

  return (
    <main className="container relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            <Link href="/">Overview</Link>
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">{title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {title}
          </h1>
        </div>

        <div className="pb-12 pt-8">
          {Markdoc.renderers.react(content, React, { components })}
        </div>
      </div>
      {toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden border-l pt-6">
            <ScrollArea className="pb-10 pl-10">
              <TableOfContents 
                items={tableOfContents.map(item => ({
                  ...item,
                  url: item.id
                }))} 
              />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
