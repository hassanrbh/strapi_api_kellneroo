import React from 'react'
import HeroSection from '../components/heroSection/Hero'
import FeaturesPage from '../components/featuresSection/Features'
import FindUser from '../components/slider/FindUser'

function Home() {
  return (
    <div>
      <HeroSection />
      <FindUser />
      <FeaturesPage />
    </div>
  )
}

export default Home
