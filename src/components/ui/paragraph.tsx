// Source: https://ui.shadcn.com/docs/components/typography
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function TypographyP({
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  )
}