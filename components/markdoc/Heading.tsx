interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children?: React.ReactNode
  id?: string
}

export function Heading({ level = 1, children, id }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <Component id={id} className="scroll-m-20">
      {children}
    </Component>
  )
} 