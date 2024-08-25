import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'



export const ProjectCard = ({index, name, description, tags, image,  source_code_link}) => {
  return (
    
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
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

ProjectCard.propTypes = {
  index: PropTypes.string, 
  name: PropTypes.string, 
  description: PropTypes.string, 
  tags: PropTypes.array, 
  image: PropTypes.string,
  source_code_link: PropTypes.string
}


export const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-h-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Mon travail</p>
        <h2 className={styles.heroHeadText}>Projets.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {`Ici, vous découvrirez une sélection de mes projets, reflétant mon parcours et mon expertise en développement web et mobile. Chaque projet est une illustration de ma passion pour la création de solutions innovantes et performantes, utilisant des technologies modernes telles que React, React Native, Next.js et bien d'autres. Explorez mon travail et voyez comment je transforme des idées en applications réactives et intuitives, répondant aux besoins des utilisateurs finaux.`}
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
    </motion.section>
  )
}