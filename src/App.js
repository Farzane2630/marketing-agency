import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Services from './services/Services/Services'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import WhyUs from './WhyUs/WhyUs'
import Brand from './Brand/Brand'
import Case from './Case/Case'
import TestimonialSection from './Testimonial/TestimonialSection'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Pricing />
      <WhyUs />
      <Brand />
      <Case />
      <TestimonialSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
