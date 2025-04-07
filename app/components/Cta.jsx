'use client'
import { useScroll, useTransform, motion } from "framer-motion"
import {FaWhatsapp } from  'react-icons/fa'

export  const Cta = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])

   const handleWhatsApp = () => {
      const whatsappLink = `https://wa.me/918511926953?text=Hello, I'm interested in your services`;
      window.open(whatsappLink, '_blank');
   };
  return (
    <div>
      <motion.div
        style={{ opacity, y }}
        className="fixed bottom-16  shadow-inner right-8 z-50 hover:scale-110 transition duration-200"
      >
        <button
          className="gap-2 lg:p-4 p-3  rounded-full  bg-green-600 text-white"
          onClick={handleWhatsApp}
        >
           <FaWhatsapp className="h-6 w-6 "/>
        </button>
      </motion.div>
    </div>
  )
}
