import { cn } from '@/lib/utils'

type ParagraphProps = {
  children: React.ReactNode
  className?: string
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={cn(className)}>{children}</p>
}

export default Paragraph
