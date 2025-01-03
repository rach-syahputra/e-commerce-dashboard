type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='max-w-screen-[1440px] mx-auto flex w-full flex-col gap-8 px-6'>
      {children}
    </div>
  )
}

export default Container
