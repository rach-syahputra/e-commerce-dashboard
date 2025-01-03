type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <h1 className='text-xl font-bold uppercase text-zinc-800 dark:bg-gradient-to-b dark:from-gray-100 dark:to-gray-300 dark:bg-clip-text dark:text-transparent lg:text-2xl'>
      {children}
    </h1>
  )
}

export default Header
