/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import React from 'react';
import  {Tilt}  from 'react-tilt';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-justify">
        Greetings, I'm Aman Goel, affectionately known as Wolfie – a moniker that not only reflects my adventurous and tenacious spirit 
        but has become synonymous with my journey through the realms of tennis and code. Originating from the culturally rich landscape of India, 
        my story is woven with the threads of passion, determination, and an unyielding love for soft tennis, where I've had the honor of 
        representing my country on numerous occasions. As I traverse the academic landscape in my second year at SRM Chennai, my pursuits extend 
        far beyond the boundaries of textbooks and tennis courts.<br /><br />

        In the dynamic arena of sports, each swing of the racket is a symphony of dedication and precision. Tennis, to me, is not just a 
        game, it's a canvas where I paint my commitment to excellence. Simultaneously, the world of coding beckons with promises of innovation 
        and creativity. My fascination with coding is not just about mastering languages; it's a journey into the limitless possibilities of 
        technology, an exploration that fuels my intellectual curiosity.<br /><br />
        
        Beyond the structured world of code and the competitive arena of tennis, I am a firm believer in the profound power of connections. 
        While I may carry a hint of introversion, my playful nature blossoms in the art of forging new friendships. Trust and friendship, to me, 
        are not just ideals but guiding principles that infuse warmth and authenticity into every interaction. Each new acquaintance is an 
        opportunity for camaraderie, an extension of the pack where bonds are formed and memories created.<br /><br />
        
        In the academic realm, I am not merely a diligent student; I am a seeker of challenges. Excelling in my studies is not just a goal but a 
        testament to my relentless pursuit of knowledge. The world of coding, with its intricacies and complexities, offers the perfect terrain 
        for my inquisitive mind. Every coding challenge is a chance to embody the spirit of a wolf - resilient, adaptable, and always hungry for 
        success.<br /><br />
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");