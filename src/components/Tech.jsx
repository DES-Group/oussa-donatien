import { SectionWrapper } from '../hoc'
import {technologies} from '../constants'
import ProgressBar from './ProgressBar'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Les technologies que j'utilise au quotidien</p>
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
  </>
  )
}

export default SectionWrapper(Tech, "tech")