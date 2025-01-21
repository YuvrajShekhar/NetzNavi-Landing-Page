import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
