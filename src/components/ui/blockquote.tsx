import * as React from "react"
import { cn } from "@/lib/utils"

// Source: https://ui.shadcn.com/docs/components/typography
export interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode
}

export function TypographyBlockquote({ 
  children,
  className,
  ...props
}: BlockquoteProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground", className)}
      {...props}
    >
      {children}
    </blockquote>
  )
}