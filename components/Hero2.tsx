'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from './Image'

const Hero2 = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const techBadgesRef = useRef([])

  const languages = [
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-black' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-700' },
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-yellow-400' },
    { name: 'Java', icon: '☕', color: 'from-orange-600 to-red-600' },
    { name: 'C#', icon: '#', color: 'from-purple-600 to-purple-700' },
    { name: 'JavaScript', icon: 'JS', color: 'from-yellow-400 to-yellow-500' },
    { name: 'React Native', icon: '📱', color: 'from-cyan-400 to-blue-500' },
    { name: 'C', icon: 'C', color: 'from-blue-600 to-blue-700' },
  ]

  useEffect(() => {
    // Title animation with split effect
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8, rotateX: -90 },
      { opacity: 1, scale: 1, rotateX: 0, duration: 1.5, ease: 'back.out(1.7)' }
    )

    // Stagger animation for bento cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.2 + index * 0.1,
            ease: 'power3.out',
          }
        )
      }
    })

    // Tech badges animation
    techBadgesRef.current.forEach((badge, index) => {
      if (badge) {
        gsap.fromTo(
          badge,
          { opacity: 0, scale: 0, rotate: -180 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.6,
            delay: 1 + index * 0.05,
            ease: 'back.out(2)',
          }
        )
      }
    })
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden py-12 lg:py-20">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-orange-400/10 via-red-400/10 to-pink-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-purple-400/10 via-blue-400/10 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Image with modern treatment */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-gray-200/50 shadow-2xl dark:border-gray-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 mix-blend-overlay" />
          <Image
            src="/static/bg-hero.svg"
            alt="hero"
            width={1920}
            height={720}
            className="w-full"
          />
        </div>

        {/* Main title with 3D effect */}
        <div className="mb-12 overflow-hidden">
          <h1
            ref={titleRef}
            className="font-['Red_Hat_Display'] bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-center text-6xl font-black tracking-tighter text-transparent sm:text-7xl lg:text-9xl"
            style={{ perspective: '1000px' }}
          >
            HIEP NGUYEN
          </h1>
        </div>

        {/* Bento Grid Layout */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Card 1 - Large featured card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-pink-600 p-8 shadow-xl md:col-span-2 lg:row-span-2"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-block rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-white">Full-Stack Developer</h3>
              <p className="text-lg text-white/90">
                Crafting seamless experiences from database to interface with modern technologies
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 transition-transform group-hover:scale-150" />
          </div>

          {/* Card 2 - Stats */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="group rounded-3xl border border-gray-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:scale-105 dark:border-gray-700/50 dark:bg-gray-800/80"
          >
            <div className="text-5xl font-black text-orange-600 dark:text-orange-400">100+</div>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              Projects Shipped
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 transition-all group-hover:w-full" />
            </div>
          </div>

          {/* Card 3 - Experience */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="group rounded-3xl border border-gray-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:scale-105 dark:border-gray-700/50 dark:bg-gray-800/80"
          >
            <div className="text-5xl font-black text-red-600 dark:text-red-400">5+</div>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              Years Experience
            </p>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 flex-1 rounded bg-gradient-to-t from-red-500 to-orange-500"
                  style={{ height: `${(i + 1) * 16}px` }}
                />
              ))}
            </div>
          </div>

          {/* Card 4 - Status */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="rounded-3xl border border-gray-200/50 bg-gradient-to-br from-green-500 to-emerald-600 p-6 shadow-lg md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-4 w-4 animate-ping rounded-full bg-white/60" />
                <div className="absolute inset-0 h-4 w-4 rounded-full bg-white" />
              </div>
              <span className="text-lg font-bold text-white">Available for work</span>
            </div>
            <p className="mt-3 text-sm text-white/90">
              Open to exciting projects and collaborations
            </p>
          </div>

          {/* Card 5 - Contact */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="group rounded-3xl border border-gray-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:scale-105 dark:border-gray-700/50 dark:bg-gray-800/80 lg:col-span-1"
          >
            <div className="mb-3 inline-block rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-3">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Get in touch</p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              Let's build something amazing
            </p>
          </div>
        </div>

        {/* Tech Stack with modern badges */}
        <div>
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Tech Stack & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((tech, index) => (
              <div
                key={tech.name}
                ref={(el) => (techBadgesRef.current[index] = el)}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:scale-110 hover:shadow-2xl"
              >
                <div className={`bg-gradient-to-r ${tech.color} px-5 py-3`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="font-['Red_Hat_Mono'] text-sm font-bold text-white">
                      {tech.name}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/0 transition-all group-hover:bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
