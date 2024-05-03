import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'



const ProjectCard = ({index, name, description, tags, image,  source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{
          max: 45,
          scale: 1, 
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          
            <Link
              to={source_code_link}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              target='_blank'
            >
              <img src={github} alt="github"  className='w-1/2 h-1/2 object-contain'/>
            </Link>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-5 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}


const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Mon travail</p>
        <h2 className={styles.heroHeadText}>Projets.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            Je suis un développeur passionné avec une expertise polyvalente dans Symfony, React, Next.js, Flutter et la conception 3D. En tant qu'ingénieur en intelligence artificielle, je suis spécialisé dans le développement d'algorithmes d'apprentissage automatique et de systèmes d'IA avancés. J'ai également une vaste expérience dans la création d'applications web et mobiles réactives, ainsi que dans la conception d'environnements 3D immersifs.<br />
        Je suis motivé par les défis techniques et je m'efforce de repousser les limites de la technologie. Avec une approche centrée sur l'utilisateur et une attention particulière aux détails, je suis capable de créer des solutions innovantes qui répondent aux besoins et aux attentes des utilisateurs finaux.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}            
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")