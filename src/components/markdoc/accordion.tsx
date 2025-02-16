import { useId } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface MarkdocAccordionProps {
  children: React.ReactNode
  type: "single" | "multiple"
  collapsible?: boolean
}

interface MarkdocAccordionItemProps {
  children: React.ReactNode
  title: string
}

export function MarkdocAccordion({
  children,
  type = "single",
}: MarkdocAccordionProps) {
  return <Accordion type={type}>{children}</Accordion>
}

export function MarkdocAccordionItem({
  title,
  children,
}: MarkdocAccordionItemProps) {
  const id = useId()
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  )
}