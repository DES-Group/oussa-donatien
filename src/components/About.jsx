
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, staggerContainer, textVariant} from '../utils/motion'
import PropTypes from 'prop-types'


const ServiceCard = ({ index, title, icon }) => {
  
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card'
      >
        <motion.div
          options={{
            max: 45, 
            speed: 450,
            scale: 1
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{ title }</h3>
        </motion.div>
      </motion.div>
    </Tilt>
  )
}



ServiceCard.propTypes = {
  index: PropTypes.string, 
  title: PropTypes.string, 
  icon: PropTypes.string,
}



export const About = (idName) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-h-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>&nbsp;</span>
            
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>À propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {`Je suis un développeur web fullstack et mobile passionné, expert en Symfony, React, Next.js, Node.js et React-Native. Fort d'une expérience approfondie dans la création d'applications web et mobiles réactives et modernes, je suis motivé par les défis techniques et cherche constamment à repousser les limites de la technologie. Avec une approche centrée sur l'utilisateur et une grande attention aux détails, je conçois des solutions innovantes répondant aux besoins et attentes des utilisateurs finaux.`}<br /><br/>

        <b className='text-2xl'>Mon tech stack se présente comme suit :</b> 
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </motion.section>
  )
}

