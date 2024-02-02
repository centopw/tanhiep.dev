import React from 'react'
import Image from './Image'
const Hero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="mx-auto max-w-2xl py-28 sm:py-32 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-6xl">
              Xin chào 👋 <br />
              Mình là <span className="text-red-500">Hiệp Nguyễn</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600  dark:text-gray-200">
              Mình là một lập trình viên, mình thích viết blog để chia sẻ những kiến thức về lập
              trình và những thứ khác!.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/blog"
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Tất cả bài viết
              </a>
              <a
                href="/about"
                className="border-b-2 border-transparent text-sm font-semibold leading-6 text-red-500 hover:border-red-400 hover:text-red-400"
              >
                Resume<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#E5D3B8] to-[#aae699] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
