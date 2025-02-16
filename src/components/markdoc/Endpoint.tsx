import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader } from "../ui/card"

interface EndpointProps {
  method: string
  path: string
  description?: string
  children?: React.ReactNode
}

export function Endpoint({ method, path, description, children }: EndpointProps) {
  const methodColor = {
    GET: 'bg-green-500',
    POST: 'bg-blue-500',
    PUT: 'bg-yellow-500',
    DELETE: 'bg-red-500',
  }[method] || 'bg-gray-500'

  return (
    <Card className="my-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Badge className={methodColor}>{method}</Badge>
        <code className="text-lg">{path}</code>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      )}
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
} 