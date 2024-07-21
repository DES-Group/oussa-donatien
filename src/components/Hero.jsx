import { motion } from 'framer-motion'
import {styles} from '../styles'
import { myPicture, githubBlue, linkedin, whatsapp } from '../assets'
const Hero = () => {
  
  return (
    <section className="relative w-full mx-auto py-[100px]">
      
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className={`${styles.paddingX} inset-0 top-[100px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 w-full md:w-1/2`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-0 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Salut, je suis
              <span className="text-[#915eff]"> Donatien</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4`}>
              Je suis un développeur web fullstack & mobile. Je suis <br className='sm:block hidden' />
              passionné, polyvalent, innovant & rigoureux.
            </p>
          </div> 
        </div>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
          <img src={myPicture} alt="ma photo" className='rounded-[10%]' width={320} height={320} />
          <div className='mt-5'>
            <ul className='flex justify-between gap-5 sm:gap-10'>
              <li><a href='https://github.com/DES-Group' target="_blank" rel="noopener noreferrer"><img src={githubBlue} width={30} height={30} alt="GitHub" /></a></li>
              <li><a href='https://www.linkedin.com/in/donatien-oussa-80269b268/' target="_blank" rel="noopener noreferrer"><img src={linkedin} width={30} height={30} alt="LinkedIn" /></a></li>
              <li><a href='https://wa.me/22962140234' target="_blank" rel="noopener noreferrer"><img src={whatsapp} width={30} height={30} alt="WhatsApp" /></a></li>
            </ul>
          </div>
        </div>
      </div>


      {/* <ComputersCanvas /> */}

      <div className='mt-[5%] xs:bottom-10 bottom-36 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>

            <motion.div
              animate={{
                y: [0,24,0]
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}

              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero