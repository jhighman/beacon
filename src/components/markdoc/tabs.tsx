import * as React from "react"
import slugify from "@sindresorhus/slugify"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MarkdocTabsProps {
  children: React.ReactNode
  labels: string[]
  defaultValue?: string
}

interface MarkdocTabProps {
  children: React.ReactNode
  label: string
}

export function MarkdocTabs({ children, labels, defaultValue }: MarkdocTabsProps) {
  const slugifiedDefault = slugify(defaultValue || labels[0])

  return (
    <Tabs defaultValue={slugifiedDefault} className="relative mt-6">
      <TabsList>
        {labels.map((label) => (
          <TabsTrigger key={slugify(label)} value={slugify(label)}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  )
}

export function MarkdocTab({ children, label }: MarkdocTabProps) {
  return <TabsContent value={slugify(label)}>{children}</TabsContent>
}