'use client'

import React, { useState } from 'react'
import Link from './Link'
const UnderDevelopBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }
  return (
    <div className="fixed bottom-0 end-0 z-[60] mx-auto w-full p-6 sm:max-w-sm">
      <div className="rounded-xl bg-white/[.6] p-4 shadow-2xl backdrop-blur-lg dark:bg-gray-900/[.4] dark:shadow-black/[.7]">
        <div className="flex items-center justify-between gap-x-5 sm:gap-x-10">
          <h2 className="font-semibold text-gray-800 dark:text-white">Under Developments!</h2>
          <button
            type="button"
            className="inline-flex rounded-full p-2 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
          This website is currently under development and will be available soon.
        </p>
        <div className="mb-2 mt-5 flex w-full gap-x-2">
          <div className="grid w-full">
            <Link
              href="https://github.com/centopw/tanhiep.dev"
              type="button"
              className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Follow me on Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderDevelopBanner
