import { notFound } from 'next/navigation'
import { readFileSync } from 'fs'
import { join } from 'path'
import Markdoc from '@markdoc/markdoc'
import * as React from 'react'
import matter from 'gray-matter'
import { config, components } from '@/lib/markdoc'

interface PageProps {
  params: {
    slug?: string[]
  }
}

async function getMarkdocContent(slug: string[]) {
  const filePath = join(process.cwd(), 'markdoc/docs', `${slug.join('/')}.md`)
  
  try {
    const rawContent = readFileSync(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(rawContent)
    
    const ast = Markdoc.parse(content)
    const transformed = Markdoc.transform(ast, {
      ...config,
      variables: {
        ...config.variables,
        frontmatter,
      },
    })

    return { content: transformed, frontmatter }
  } catch {
    return null
  }
}

export default async function DocPage({ params }: PageProps) {
  const slug = params.slug || ['index']
  const result = await getMarkdocContent(slug)
  
  if (!result) {
    notFound()
  }

  const { content, frontmatter } = result
  
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {frontmatter.title && (
        <h1 className="text-4xl font-bold mb-8">{frontmatter.title}</h1>
      )}
      {Markdoc.renderers.react(content, React, { components })}
    </div>
  )
} 