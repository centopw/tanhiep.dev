'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)
  const floatingCardsRef = useRef([])

  useEffect(() => {
    // Main content animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 }
    )
    .fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    )

    // Floating cards animation
    floatingCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotate: -10 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1,
            delay: 0.5 + index * 0.2,
            ease: 'back.out(1.7)'
          }
        )

        // Continuous floating animation
        gsap.to(card, {
          y: -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3
        })
      }
    })
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50/30 via-orange-50/20 to-pink-50/30 dark:from-red-950/20 dark:via-orange-950/10 dark:to-pink-950/20" />

      {/* Animated blurred shapes */}
      <div
        className="absolute -top-40 left-[10%] -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-3xl"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute -bottom-40 right-[10%] -z-10 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-r from-pink-400/20 to-red-400/20 blur-3xl"
        style={{ animationDuration: '5s', animationDelay: '1s' }}
      />

      {/* Main content grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Main content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Title with gradient effect */}
            <div ref={titleRef} className="space-y-4">
              <div className="inline-block">
                <span className="mb-3 inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  ✨ Designer & Developer
                </span>
              </div>
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent dark:from-gray-100 dark:via-red-400 dark:to-orange-400">
                  tanhiep
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                    .dev
                  </span>
                  <span className="text-4xl">👋</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              ref={textRef}
              className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 lg:text-2xl"
            >
              Creating{' '}
              <span className="font-semibold text-red-600 dark:text-red-400">beautiful</span> and{' '}
              <span className="font-semibold text-orange-600 dark:text-orange-400">functional</span>{' '}
              user interfaces with passion and precision
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href="/about"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Learn more</span>
                <svg
                  className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-red-500/20 bg-white/50 px-8 py-4 font-semibold text-gray-900 backdrop-blur-sm transition-all hover:border-red-500 hover:bg-red-50 dark:bg-gray-900/50 dark:text-white dark:hover:bg-red-950/50"
              >
                <span>Read my blog</span>
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Stats or quick info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-red-600 transition-all group-hover:scale-110 dark:text-red-400">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-orange-600 transition-all group-hover:scale-110 dark:text-orange-400">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-pink-600 transition-all group-hover:scale-110 dark:text-pink-400">
                  ∞
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ideas to Build</div>
              </div>
            </div>
          </div>

          {/* Right column - Floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative h-full">
              {/* Card 1 - Skills */}
              <div
                ref={(el) => (floatingCardsRef.current[0] = el)}
                className="absolute left-0 top-10 w-64 rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-red-500 to-orange-500 p-2">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">Development</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  React, Next.js, TypeScript, Node.js
                </p>
              </div>

              {/* Card 2 - Design */}
              <div
                ref={(el) => (floatingCardsRef.current[1] = el)}
                className="absolute right-0 top-32 w-64 rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-pink-500 to-red-500 p-2">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">Design</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  UI/UX, Figma, Adobe Creative Suite
                </p>
              </div>

              {/* Card 3 - Achievement */}
              <div
                ref={(el) => (floatingCardsRef.current[2] = el)}
                className="absolute bottom-10 left-10 w-64 rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 p-2">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">Impact</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Building products that people love
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
