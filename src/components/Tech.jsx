
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import ParallaxTilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";
const Tech = () => {
  return (
    <>

      <motion.div variants={textVariant()}>

        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {
          technologies.map((technology, i) => (
            <div className='w-30 h-30' key={technology.name}>
              <motion.div
                key={technology.name}
                variants={fadeIn("up", "spring", i * 0.1, 0.6)}
                initial="hidden"
                animate="show"
              >
                <ParallaxTilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.5}
                  transitionSpeed={250}
                  className="w-20 h-20 bg-blue-900 rounded-lg shadow-md flex items-center justify-center"
                >
                  <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
                </ParallaxTilt>
              </motion.div>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')