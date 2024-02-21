'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const titleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    )
  }, [])

  return (
    <>
      <div className="o overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#E5D3B8] to-[#c2a596] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-4xl font-light tracking-tight transition-all duration-500 hover:font-bold  dark:text-white sm:text-6xl"
            >
              tanhiep<span className="ml-1 rounded-lg bg-red-500 p-1 text-2xl">.dev</span>
            </h1>
            <p ref={textRef} className="mt-6 text-lg leading-8  text-gray-600 dark:text-gray-200">
              A Designer and Developer who love to create beautiful and functional user interfaces
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn more
              </a>
              <a
                href="/about"
                className="border-b-2 border-transparent text-sm font-semibold leading-6 text-red-400 hover:border-red-300 hover:text-red-300"
              >
                My blog<span aria-hidden="true">→</span>
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
