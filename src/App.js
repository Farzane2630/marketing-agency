import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Services from './services/Services.js'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import WhyUs from './WhyUs/WhyUs'
import Brand from './Brand/Brand'

function App() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Pricing />
      <WhyUs />
      <Brand />
    </div>
  );
}

export default App;
