import FollowCard from '@/components/FollowCard'
import Hero from '@/components/Hero'
import Jumbotron from '@/components/Jumbotron'
import LastestPost from '@/components/LastestPost'

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <Jumbotron />
      <LastestPost posts={posts} />
      <FollowCard />
    </>
  )
}
