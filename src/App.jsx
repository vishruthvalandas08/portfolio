import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works,AboutPage } from "./components";



const App = () => {


  return (

    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
