'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import tagData from 'app/tag-data.json'
import SearchBar from '@/components/SearchBar'
import TagList from '@/components/TagList'
import PostList from '@/components/PostList'
import { useMemo } from 'react'
interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button type="button" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button type="button" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchContent = post.title + post.summary + post.tags?.join(' ')
      const normalizedSearchContent = searchContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      const normalizedSearchValue = searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      return normalizedSearchContent.toLowerCase().includes(normalizedSearchValue.toLowerCase())
    })
  }, [posts, searchValue])

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const tagCounts = tagData as Record<string, number>

  return (
    <>
      <div className="divide-accent-foreground dark:divide-accent divide-y">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-foreground text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="rounded-xl border-2 border-white border-opacity-20 bg-black p-2">
            <TagList tagCounts={tagCounts} />
          </div>
        </div>
        <PostList displayPosts={displayPosts} />
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
