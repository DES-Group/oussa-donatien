import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import PropTypes from 'prop-types'


export const FeedbacksCard = ({ index, testimonial, name, company, image, designation }) => 
{
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
      <p className='text-white font-black text-[48px]'>{'"'}</p>
      
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='text-white font-medium text-[16px]' >@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>{designation} de {company}</p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-contain'
          />
        </div>
      </div>
    </motion.div>
  )
}

FeedbacksCard.propTypes = {
  index: PropTypes.string, 
  testimonial: PropTypes.string,
  name: PropTypes.string, 
  designation: PropTypes.string, 
  company: PropTypes.string, 
  image: PropTypes.string
}



export const Feedbacks = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-h-7xl mx-auto relative z-0`}
    >
      <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Ce que disent les autres</p>
          <h2 className={styles.sectionHeadText}>Témoignages.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7`}> 
        {
          testimonials.map((testimonial, index) => (
            <FeedbacksCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))
        }
      </div>
      </div>
    </motion.section>  
  )
}