import { motion } from 'framer-motion';
import { styles } from '../styles';
import { RobotCanvas } from './canvas'
import SplitText from "./splittext";




const Hero = () => {

  
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className='padding-right'>




          {/* <SplitText
            text="Hello, GSAP!"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          /> */}
          {/* <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Vishruth</span></h1> */}
          <div>
            <SplitText
              className={`${styles.heroHeadText} flex justify-center gap-4`}
              splitType="chars"
              delay={100}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            >
              <span>Hi, I’m</span><span className="text-[#915eff]">Vishruth</span>
            </SplitText>




          </div>

          <p className={`${styles.herosubText} mt-5 text-white-100`}>I build and deploy machine learning & deep learning models,
            <br className="sm:block hidden" />
            craft intuitive web applications, and explore Generative AI.</p>
        </div>
      </div>
      <RobotCanvas />
      
      <div className="absolute xs:top-100 top-80 w-full flex justify-center items-center">

        <div className="absolute right-10 top-[5%] flex flex-col items-center">
          {/* Pulsing Dot */}
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 shadow-xl mb-2"
          />

          {/* Gradient Bar */}
          <div className="w-1 h-40 bg-gradient-to-b from-pink-500 to-indigo-500 rounded mb-2" />

          {/* Bouncing Inline SVG Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 16.5l-6-6 1.414-1.414L12 13.672l4.586-4.586L18 10.5z" />
            </svg>
          </motion.div>
        </div>

      </div>
      

    </section>

  )
}

export default Hero