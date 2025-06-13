import React from 'react'
import ParallaxTilt from 'react-parallax-tilt'

import {styles} from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { motion } from "framer-motion";

const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return(
    <motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
      <ParallaxTilt options={{max:45,scale:1,speed:300}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
        {/* <img src={image} alt={image} className='w-full h-full object-cover rounded-2xl'/> */}
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          {/* <div onClick={()=>window.open(source_code_link,"_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
          </div> */}

        </div>
        <div className='mt-5'>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>mywork</p>
        <h2 className={styles.sectionHeadText}>projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Developed and maintained responsive React.js/Next.js applications—including a Hitachi Vantara skill-management portal for 300+ employees, an NLP sentiment-analysis dashboard powered by a fine-tuned LLaMA model and GPT-3.5 via FastAPI, and a skin-lesion classification viewer with Grad-CAM heatmaps—delivering measurable improvements in user engagement, diagnostic confidence, and operational efficiency.

           </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index)=>(
          <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}/>
        ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works,'works')