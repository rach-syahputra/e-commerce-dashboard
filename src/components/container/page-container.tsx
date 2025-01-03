type PageContainerProps = {
  children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className='flex w-full flex-col gap-4 py-4 lg:px-4'>{children}</div>
  )
}

export default PageContainer
