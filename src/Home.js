import React, { useEffect } from 'react'
import Navbar from './components/header/Navbar'
import WelcomScreen from './components/welcomeScreen/WelcomScreen'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedServices from './components/FeaturedService';
import AboutSection from './components/AboutSection';
import Services from './components/ServiceSection';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/footer/Footer';


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <WelcomScreen />
      <FeaturedServices />
      <AboutSection />
      <Services />
      <CallToAction />
      <Features />
      <Pricing />
      <Testimonials/>
      <Faq/>
      <Footer/>
    </React.Fragment>
  )
}

export default Home