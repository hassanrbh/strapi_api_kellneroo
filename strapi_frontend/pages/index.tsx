import React from 'react'
import HeroSection from '../components/heroSection/Hero'
import AppStore from '../components/appStore/appStore'
import { NewsLetter } from '../components/newsletter/NewsLetter'
import { DownLoad } from '../components/DownloadPage/DownloadPage'

function Home() {
  return (
    <div>
      <HeroSection />
      <AppStore />
      <NewsLetter />
      <DownLoad />
    </div>
  )
}

export default Home
