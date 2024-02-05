import React from 'react'
import Link from './Link'
import Image from 'next/image'
const FollowCard = () => {
  return (
    <div className="mt-10 align-middle">
      <div className="relative isolate overflow-hidden rounded-2xl border-2 border-white border-opacity-15 shadow-2xl sm:px-16 md:py-6 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
        <Image
          src="/static/images/grid-background.png"
          alt="asd"
          width={4096}
          height={4096}
          className="absolute left-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 "
        />

        <div className="z-10 text-center lg:mx-0 lg:flex-auto lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Follow my work
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/blog"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              My Blog
            </Link>
            <Link
              href="https://github.com/centopw"
              className="text-sm font-semibold leading-6 text-white"
            >
              Github <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowCard
