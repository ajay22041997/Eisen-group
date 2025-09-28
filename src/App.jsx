import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import CategoryCard  from './components/CategoryCard'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll' 
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import ProductCard from "./components/ProductCard";
import productsData from "./components/productsData";
import Programs from './components/Programs'


import  Blogsection  from './components/Blogsection';


import Factory from './/components/Factory'
import Countup from './/components/Countup'
import VisionMission from './components/VisionMission'

import ContactPage from './components/ContactPage'
import ProfileCarousel from './components/ProfileCarousel'
import ImageGallery from './components/ImageGallery'
import ChatBot from './components/ChatBot'
function ProductsPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Products Page</h1>
      <p>Here you can list all your products or categories.</p>
    </div>
  );
}
function CategoryDetailPage() {
  const { categoryName } = useParams();
  const products = productsData[categoryName] || [];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}




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
      <Router>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:categoryName" element={<CategoryDetailPage />} />
      </Routes>
    </Router>

     
      <Programs/>
 
 <ProfileCarousel 
        
      />
  
      <ImageGallery/>

   
      
    
      <Blogsection />
      <ContactPage />
      <ChatBot/>
      <Footer />
      
    </div>
  )
}

export default App
