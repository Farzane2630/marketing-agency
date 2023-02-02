import React from 'react'
import Header from '../Header/Header'
import Services from '../services/Services/Services'
import About from '../About/About'
import Pricing from '../Pricing/Pricing'
import WhyUs from '../WhyUs/WhyUs'
import Brand from '../Brand/Brand'
import Case from '../Case/Case'
import TestimonialSection from '../Testimonial/TestimonialSection'
import Contact from '../Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Pricing />
      <WhyUs />
      <Brand />
      <Case />
      <TestimonialSection />
      <Contact />
    </>
  )
}
