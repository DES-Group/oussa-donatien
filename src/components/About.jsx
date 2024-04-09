
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card '
      >
        <div
          options={{
            max: 45, 
            speed: 450,
            scale: 1
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{ title }</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>À propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Je suis un développeur passionné avec une expertise polyvalente dans Symfony, React, Next.js, Flutter et la conception 3D. En tant qu'ingénieur en intelligence artificielle, je suis spécialisé dans le développement d'algorithmes d'apprentissage automatique et de systèmes d'IA avancés. J'ai également une vaste expérience dans la création d'applications web et mobiles réactives, ainsi que dans la conception d'environnements 3D immersifs.<br />
        Je suis motivé par les défis techniques et je m'efforce de repousser les limites de la technologie. Avec une approche centrée sur l'utilisateur et une attention particulière aux détails, je suis capable de créer des solutions innovantes qui répondent aux besoins et aux attentes des utilisateurs finaux.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");