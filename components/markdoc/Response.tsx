import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ResponseProps {
  status: number
  description?: string
  children?: React.ReactNode
}

export function Response({ status, description, children }: ResponseProps) {
  const statusColor = {
    2: 'bg-green-500',
    3: 'bg-blue-500',
    4: 'bg-yellow-500',
    5: 'bg-red-500',
  }[Math.floor(status / 100)] || 'bg-gray-500'

  return (
    <Card className="my-2">
      <CardHeader className="flex flex-row items-center gap-4">
        <Badge className={statusColor}>{status}</Badge>
        {description && <span>{description}</span>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
} 