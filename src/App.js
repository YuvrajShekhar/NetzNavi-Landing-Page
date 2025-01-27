import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import AboutSecond from './Components/About_second';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="about">
      <About/>
      <AboutSecond />
      </div>
      <div id="features"><Work/></div>
      <div id="testimonials"><Testimonials/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
    </div>
  );
}

export default App;
