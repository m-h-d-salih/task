
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/Services";
import PortfolioSection from "../components/PortfoloiSection";
import CoreValuesSection from "../components/CoreValuesection";
import React from 'react'
import TeamSection from "../components/TeamSection";

function Home() {
  return (
    <div className="">
                    <HeroSection />

          <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <TeamSection/>
            <CoreValuesSection />
      
    </div>
  )
}

export default Home
