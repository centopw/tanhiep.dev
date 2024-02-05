import Image from 'next/image'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

export default function PostList({ displayPosts }) {
  return (
    <ul>
      {!displayPosts.length && 'No posts found.'}
      {displayPosts.map((post) => {
        const { path, date, title, summary, tags, images } = post
        const displayImage =
          images && images.length > 0 ? images[0] : 'https://picsum.photos/seed/picsum/800/400'
        return (
          <li key={path} className="mt-2 p-4">
            <article className="space-y-2 xl:grid xl:grid-cols-5 xl:items-start xl:gap-4 xl:space-y-0">
              <div className="xl:col-span-2">
                <Image
                  src={displayImage || ''}
                  alt={`${title} thumbnail`}
                  height={400}
                  width={800}
                  objectFit="cover"
                  objectPosition="center"
                  className="mb-4 rounded-md"
                  unoptimized
                />
              </div>
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className=" mb-2 text-2xl font-bold leading-8 tracking-tight  hover:text-gray-200">
                    <Link href={`/${path}`} className="text-foreground">
                      {title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap space-x-3">
                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                </div>
                <div className="text-muted-foreground prose prose-sm max-w-none text-gray-300">
                  {summary}
                </div>
                <div>
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-muted-foreground flex gap-1 text-base font-medium leading-6">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
