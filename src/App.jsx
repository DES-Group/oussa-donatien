import { BrowserRouter } from "react-router-dom"

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas
} from './components';
import Footer from "./components/Footer";


function App() {
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
