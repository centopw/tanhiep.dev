import FollowCard from '@/components/FollowCard'
import Hero from '@/components/Hero'
import LastestPost from '@/components/LastestPost'

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <LastestPost posts={posts} />
      <FollowCard />
    </>
  )
}
