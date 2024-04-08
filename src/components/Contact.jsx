import { useState, useRef } from "react";
import { motion } from 'framer-motion'
import emailjs  from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion";

// Ilm07H8cPoRvcVL4_
//template_56adagd
//service_y4o6bpo

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    const { name, value } = e.target 
    setForm({...form, [name]: value})
  }


  const handleSbmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_y4o6bpo',
      'template_56adagd',
      {
        from_name: form.name, 
        to_name: 'Donatien',
        from_email: form.email,
        to_email: 'donatienoussaodb@gmail.com',
        message: form.message
      }, 
      'Ilm07H8cPoRvcVL4_' //PUBLIC KEY
    )
      .then(() => {
        setLoading(false)
        alert('Merci. Je vous reviens le plus tôt possible.')

        setForm({
          name: '', 
          email: '', 
          message: ''
        })
      }), 
      (error) => {
        setLoading(false)
        console.log(error) 
        alert("Il y a un problème.")
      }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.heroSubText}`}>Get in touch</p>
        <h3 className={`${styles.heroHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSbmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre Nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre E-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre e-mail ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Quel est votre message ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading  ? 'Envoi...' : 'Envoyer'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact"); 