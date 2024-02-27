import React from 'react'
import Image from './Image'

const Hero2 = () => {
  const languages = [
    'C',
    'Python',
    'NodeJS',
    'Java',
    'C#',
    'JavaScript',
    'NextJS',
    'ReactJS',
    'React Native',
    'TypeScript',
  ]

  return (
    <div>
      <div className="left-0 top-0 mt-10 flex max-w-fit justify-center overflow-hidden lg:mt-20">
        {/* Hero Img */}
        <div className="left-0 right-0 top-0 rounded-xl bg-cover" />
        <Image src="/static/bg-hero.svg" alt="hero" width={1920} height={720} />
      </div>

      <div className="mt-2 flex flex-col sm:flex-row">
        <div className="font-['Red Hat Display'] whitespace-nowrap text-6xl font-bold text-orange-400 lg:text-9xl">
          HIEP NGUYEN
        </div>
        <div className="mt-5 flex  flex-wrap">
          {languages.map((language, index) => (
            <div key={index} className="">
              <div className="font-['Red Hat Mono'] mr-1 cursor-pointer justify-center self-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-bold text-white hover:bg-gray-900">
                {language}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero2
