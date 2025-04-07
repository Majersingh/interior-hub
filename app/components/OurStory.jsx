'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const OurStory = () => {
  return (
    <section id="our-story" className="py-10 bg-accent">
      <div className="container px-4">
        <h2 className="lg:hidden sm:hidden md:hidden block pb-2 text-center text-3xl md:text-4xl font-bold text-primary">
                Our Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Founder"
              fill
              sizes=''
              className=" object-fill rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="hidden lg:block text-center text-3xl md:text-4xl font-bold text-primary">
              Our Story
            </h2>
            <div className="text-secondary text-xl font-semibold">
              Started in 2013
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                It began at home, like all great things... I was redecorating my
                own home, and other related projects, when people started
                approaching me to design their properties as well.
              </p>
              <p>
                I took the plunge as a hobby, and before I knew it, it turned into
                a life-long, fulfilling profession for me.
              </p>
              <p>
                InteriorHub has been the culmination of a long-standing passion for
                Interior Design. It came together in less than three months, and it
                has now been an exciting six years.
              </p>
              <p>
                A result of young and creative energies coming together, you are set
                to experience a range of curated pieces in the plane of flooring,
                décor, accessories, and rugs, as well as the occasional features
                from Paris and New York.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 