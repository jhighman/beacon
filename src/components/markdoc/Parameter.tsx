import { Badge } from "@/components/ui/badge"

interface ParameterProps {
  name: string
  type: string
  required?: boolean
  description?: string
}

export function Parameter({ name, type, required, description }: ParameterProps) {
  return (
    <div className="flex items-start gap-2 my-2">
      <code className="font-semibold">{name}</code>
      <Badge variant="outline">{type}</Badge>
      {required && <Badge variant="destructive">Required</Badge>}
      {description && <span className="text-muted-foreground">{description}</span>}
    </div>
  )
} 