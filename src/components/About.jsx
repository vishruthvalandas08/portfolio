

import React from 'react'
import ParallaxTilt from 'react-parallax-tilt'

import {motion} from 'framer-motion'
import {styles} from '../styles';
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard=({ index,title,icon })=>{
  return (
    <ParallaxTilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>

    </ParallaxTilt>
  );
};
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
     Full-Stack Developer and Machine Learning Engineer with hands-on experience designing and building web applications using React.js and Spring Boot, as well as training and deploying deep learning and NLP models. Skilled in creating responsive UIs, developing RESTful APIs, and containerizing services with Docker. Passionate about leveraging data-driven techniques to solve complex problems and deliver scalable, maintainable solutions.Adept at architecting Agentic AI systems that orchestrate autonomous, multi-step workflows—combining planning, decision-making, and execution—to streamline complex business processes. Proficient in building Generative AI pipelines, from prompt engineering to fine-tuning large language and diffusion models, enabling creation of high-quality text, code, and images for diverse applications.
     </motion.p>
    
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
        // console.log(service.title)
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,'about')