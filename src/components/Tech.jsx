import {technologies} from '../constants'
import ProgressBar from './ProgressBar'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '../utils/motion'
import { styles } from '../styles'


export const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-h-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>{`Les technologies que j'utilise au quotidien`}</p>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((tech, index) => (
        <ProgressBar
          key={index}
          name={tech.name}
          percentage={tech.percentage}
          color={tech.color}
          icon={tech.icon}
        />
      ))}
    </div>
  </motion.section>
  )
}