type SubParagraphProps = {
  children: React.ReactNode
}

const SubParagraph = ({ children }: SubParagraphProps) => {
  return <p className='text-sm text-zinc-600 dark:text-zinc-400'>{children}</p>
}

export default SubParagraph
