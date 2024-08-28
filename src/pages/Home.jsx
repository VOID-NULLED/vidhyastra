import React from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import CareerCounselling from '../components/courer conselling/CareerCounselling'
import VidyastraWorks from '../components/vidyastraworks/VidyastraWorks'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <CareerCounselling/>
      <VidyastraWorks/>
      <CareerCounselling/>
      </div>
  )
}

export default Home