import { Header } from './components/Header'
import { ImageCarousel } from './components/ImageCarousel'
import  {Cta} from './components/Cta'
import { OurStory } from './components/OurStory'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ProjectWalkthroughs } from './components/ProjectWalkthroughs'
import { ShopPreview } from './components/Acessories'
import { OurWork } from './components/OurWork'
import { VideoFeed } from './components/OurGallery'
import { Footer } from './components/Footer'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ImageCarousel />
      <OurStory />
      <Services />
      <VideoFeed />
      // <ProjectWalkthroughs />
      <ShopPreview />
      <OurWork />
      <WhyChooseUs />
      <Cta/>
      <ContactForm/>
      <Footer />
    </main>
  )
} 
