import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('','', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
      >
        I'm a skilled software developer with
        experience in TypeScript and
        JavaScript, and exertise in frameworks
        like React, Node.JS, and
        Three.JS. I'm a quick learner and
        collaborate closely with clients to
        create efficiient, scalable, and
        user-friendly solutions that solve
        real-world problems, let's work together
        to bring your ideas to live!
      </motion.p>
      
    </>
  )
}

export default About