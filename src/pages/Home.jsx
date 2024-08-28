import React from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import CareerCounselling from '../components/courer conselling/CareerCounselling'
import VidyastraWorks from '../components/vidyastraworks/VidyastraWorks'
import CarrerOptions from '../components/carrerOptions/CarrerOptions'
import Banner from '../components/banner/Banner'
import Review from '../components/review/Review'
import Blogs from '../components/blogs/Blogs'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <CareerCounselling/>
      <VidyastraWorks/>
      <CareerCounselling/>
      <CarrerOptions/>  
      <Banner/>
      <Review/>
      <Blogs/> 
      <Footer/>
      </div>
  )
}

export default Home