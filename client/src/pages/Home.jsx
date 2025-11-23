import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import { AppHowItWorks } from '../../lib/hardData'
import ParentHero from '../components/ParentHero'
import HowItWorksTwo from '../components/HowItWorksTwo'
import ThreeDImgs from '../components/ThreeDImgs'
import AutoCarousel from '../components/AutoCarousel'
import AutoCarouselTwo from '../components/AutoCarousalTwo'
import NoteFormModal from '../components/NoteFormModal'

const Home = () => {
  return (
    <div className=''>


      <Hero />
     

      {/* <ThreeDImgs /> */}
      {/* <AutoCarouselTwo/> */}
      {/* <AutoCarousel/> */}
      {/* <ParentHero /> */}

      <Features />

      <HowItWorks />
      <HowItWorksTwo />





    </div>
  )
}

export default Home
