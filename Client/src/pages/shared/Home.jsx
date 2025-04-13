import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import EmergencyBanner from '../../components/EmergencyBanner'
import Footer from '../../components/layout/Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <EmergencyBanner />
        <Footer />
     
    </div>
  )
}
