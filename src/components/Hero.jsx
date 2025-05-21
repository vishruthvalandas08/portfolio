import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
      
        <div className='padding-right'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Vishruth</span></h1>
          <p className={`${styles.herosubText} mt-5 text-white-100`}>I develope Machine learning models, deep learning models <br className='sm:block hidden'/>
          interfaces and web applications</p>
        </div>
        
        
        
       
        <div className={`${styles.herosubText} flex flex-col justify-center items-center mt-5 padding-right-line`} style={{paddingTop:'200px'}}>
          <div className='w-5 h-5 rounded-full bg-[#915EFF] padding-left' />
          <div className='h-1 sm:w-80 w-150 violet-gradient '></div>
        </div>
        </div>
        <ComputersCanvas/>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            {/* <div className="w-[64px] h-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
              animate={{
                x:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"/> */}
              {/* <RotatingIcon/> */}
            {/* </div> */}
          </a>

        </div>
     
    </section>
    // <h1>Hekko0</h1>
    
  )
}

export default Hero