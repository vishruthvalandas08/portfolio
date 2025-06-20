import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works,AboutPage } from "./components";
import SplashCursor from './components/splashcolor'


const App = () => {


  return (

    <Router>
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <SplashCursor />
      <Routes>
        <Route path="/" element={
         <>
         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />


            <Works />
            <div className='relative z-0'>
              <Contact />
            </div>
         </>

            
         
        } />
        <Route path="/about" element={<div className="min-h-screen w-full flex items-center justify-center ">
                <AboutPage />
              </div>} />
        
       <Route
            path="/work"
            element={
              <div className="min-h-screen w-full flex items-center justify-center pt-20">
                <Works />
              </div>
            }/>
      
        <Route
            path="/contact"
            element={
              <div className="min-h-screen w-full  items-center justify-center pt-20">
                <Contact />
              </div>
            }/>
      </Routes>
       </div>
    </Router>
  );
}

export default App;
