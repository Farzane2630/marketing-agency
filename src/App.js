import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Services from './services/Services.js'
import About from './About/About'
import Pricing from './Pricing/Pricing'

function App() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Pricing />
    </div>
  );
}

export default App;
