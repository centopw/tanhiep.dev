import Link from 'next/link'
import { slug } from 'github-slugger'
import Tag from '@/components/Tag'

export default function TagList({ tagCounts }) {
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="flex  flex-wrap">
      {tagKeys.length === 0 && 'No tags found.'}
      {sortedTags.map((t) => (
        <div key={t} className="mb-2 mr-5 mt-2">
          #<Tag text={t} />
          <Link
            href={`/tags/${slug(t)}`}
            className="text-sm font-semibold uppercase "
            aria-label={`View posts tagged ${t}`}
          >
            {` (${tagCounts[t]})`}
          </Link>
        </div>
      ))}
    </div>
  )
}
