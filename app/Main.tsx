import FollowCard from '@/components/FollowCard'
import Hero from '@/components/Hero'
import LastestPost from '@/components/LastestPost'
import UnderDevelopBanner from '@/components/UnderDevelopBanner'

export default function Home({ posts }) {
  return (
    <>
      <UnderDevelopBanner />
      <Hero />
      <LastestPost posts={posts} />
      <FollowCard />
    </>
  )
}
