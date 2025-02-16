import {
    Terminal as DefaultIcon,
    XCircle as ErrorIcon,
    Info as InfoIcon,
    CheckCircle2 as SuccessIcon,
    AlertTriangle as WarningIcon,
  } from "lucide-react"
  
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
  import { cn } from "@/lib/utils"
  
  type CalloutType = "info" | "success" | "warning" | "error" | "default"
  
  interface CalloutProps {
    children: React.ReactNode
    title: string
    type?: CalloutType
  }
  
  const variantStyles = {
    default: "",
    info: "border-blue-500/50 bg-blue-500/10 text-blue-600 [&>svg]:text-blue-600",
    success: "border-green-500/50 bg-green-500/10 text-green-600 [&>svg]:text-green-600",
    warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-600 [&>svg]:text-yellow-600",
    error: "border-red-500/50 bg-red-500/10 text-red-600 [&>svg]:text-red-600",
  }
  
  const icons = {
    default: DefaultIcon,
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    error: ErrorIcon,
  } as const
  
  export default function Callout({
    children,
    title,
    type = "default",
  }: CalloutProps) {
    const IconComponent = icons[type]
  
    return (
      <Alert className={cn("my-6", variantStyles[type])}>
        <IconComponent className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    )
  }