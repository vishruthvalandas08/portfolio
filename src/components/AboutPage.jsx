import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { vishruth_photo} from "../assets";
import { SectionWrapper } from '../hoc'
const AboutPage = () => {
  return (
    <section className="text-white ">
      {/* Photo and Name */}
      <div className="flex flex-col items-center mb-8">
        <motion.div variants={textVariant()} className="text-center mb-8">
         <img
          src={vishruth_photo}
          alt="Vishruth Valandas"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      </motion.div>
         <motion.div
        variants={fadeIn('', '', 0.2, 1)}
        className="max-w-3xl mx-auto text-[17px] leading-[30px]"
      >
        <h3 className="text-xl font-semibold">Vishruth Valandas</h3>
      </motion.div>
        
      </div>

      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center mb-8">
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={fadeIn('', '', 0.2, 1)}
        className="max-w-3xl mx-auto text-[17px] leading-[30px]"
      >
        <p className="mb-4">
          I’m Vishruth Valandas, a Full-Stack Developer & Machine Learning Engineer with a passion for creating impactful, data-driven solutions. I am a Master’s student from University of North Texas, further honing my expertise in AI and software development.
        </p>
        <p className="mb-4">
          On the web, I build responsive React.js applications and robust Spring Boot APIs, containerized with Docker for seamless deployments.
        </p>
        <p className="mb-4">
          In AI, I design deep learning and NLP models, from transfer-learning ensembles to LLaMA-based generative pipelines and agentic systems that automate complex workflows.
        </p>
        <p>
          Outside of code, I enjoy exploring the latest in AI research, contributing to open source, and mentoring peers on best practices in full-stack and ML engineering.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(AboutPage,'AboutPage')