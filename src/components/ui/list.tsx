import * as React from "react"
import { cn } from "@/lib/utils"

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
  ordered?: boolean
}

export function TypographyList({ 
  children, 
  className, 
  ordered = false,
  ...props 
}: ListProps) {
  const Component = ordered ? "ol" : "ul"

  return (
    <Component
      className={cn(
        "my-6 ml-6 list-disc [&>li]:mt-2",
        ordered && "list-decimal",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}