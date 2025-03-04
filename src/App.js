import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import AboutSecond from './Components/About_second';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Slideshow from './Components/Slideshow';
import CopyrightPage from "./Components/CopyrightPage"; 
import ContactUs from './Components/send_mail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Main website layout */}
        <Route path="/" element={<MainLayout />} />

        {/* Copyright page as a full separate page */}
        <Route path="/copyright" element={<CopyrightPage />} />
      </Routes>
    </Router>
  );
}

// Define the main layout with homepage sections
const MainLayout = () => {
  return (
    <>
      <div className="App">
        <div id="home"><Home /></div>
        <div id="about">
          <About/>
          <AboutSecond />
        </div>
        <div id="slideshow"><Slideshow /></div>
        <div id="features"><Work/></div>
        <div id="testimonials"><Testimonials/></div>
        <div id="contact"><Contact/></div>
      </div>
      <Footer />
    </>
  );
};

export default App;
