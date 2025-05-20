import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll' 
import Programs from './components/Programs'


import  Blogsection  from './components/Blogsection';


import Factory from './/components/Factory'
import Countup from './/components/Countup'
import VisionMission from './components/VisionMission'
import ProductCatalog from './components/ProductCatalog'
import ContactPage from './components/ContactPage'
import ProfileCarousel from './components/ProfileCarousel'
import ImageGallery from './components/ImageGallery'
import ChatBot from './components/ChatBot'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <VisionMission />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} 
      buttonText="Explore Our Story"
  buttonLink="/about-details"
      
      
      />
      
      <Factory/>
      <Countup/>
      <Services data={landingPageData.Services} />
      <Programs/>
 
 <ProfileCarousel 
        
      />
      <ProductCatalog />
      <ImageGallery/>

   
      
      <Testimonials data={landingPageData.Testimonials} />
      <Blogsection />
      <ContactPage />
      <ChatBot/>
      <Footer />
    </div>
  )
}

export default App
