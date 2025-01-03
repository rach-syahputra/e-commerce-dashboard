type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p>{children}</p>
}

export default Paragraph
