import { cn } from '@/lib/utils'
import { useSidebar } from '../ui/sidebar'

type SummaryProps = {
  children: React.ReactNode
}

const Summary = ({ children }: SummaryProps) => {
  const { open } = useSidebar()
  return (
    <div
      className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4', {
        'md:grid-cols-3 lg:grid-cols-4': !open
      })}
    >
      {children}
    </div>
  )
}

export default Summary
