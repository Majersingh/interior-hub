import { Header } from './components/Header'
import { ImageCarousel } from './components/ImageCarousel'
// import { Hero } from './components/Hero'
import { OurStory } from './components/OurStory'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ProjectWalkthroughs } from './components/ProjectWalkthroughs'
import { ShopPreview } from './components/ShopPreview'
import { OurWork } from './components/OurWork'
import { VideoFeed } from './components/VideoFeed'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ImageCarousel />
      {/* <Hero /> */}
      <OurStory />
      <Services />
      <WhyChooseUs />
      <ProjectWalkthroughs />
      <ShopPreview />
      <OurWork />
      <VideoFeed />
      <Footer />
    </main>
  )
} 