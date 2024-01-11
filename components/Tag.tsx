import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 border-b-2 border-transparent text-sm font-medium uppercase text-orange-300 hover:border-orange-200 hover:text-orange-200"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
