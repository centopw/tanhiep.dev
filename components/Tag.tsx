import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 border-b-2 border-transparent text-sm font-medium uppercase text-red-500 hover:border-red-400 hover:text-red-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
