import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { staggerContainer, textVariant } from "../utils/motion"
import PropTypes from 'prop-types'



export const ExperienceCard = ({experience}) => {
  return (
    
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              title={experience.company_name}
              className="w-[80%] h-[80%] object-contain"
          />  
        </div>
        }
      >
      <div>
        <h3 className="text-white text-[24px] font-bold ">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin: '0'}}>{ experience.company_name }</p>
      
        <ul className="mt-5 ml-5 list-disc space-y-2">
          {
            experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))
          }
        </ul>
      </div>
    </VerticalTimelineElement>
  
  )
}


ExperienceCard.propTypes = {
  experience: PropTypes.array
  
}

export const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-h-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>{`Ce que j'ai fait jusqu'à présent`}</p>
        <h2 className={styles.heroHeadText}>Expériences.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}
