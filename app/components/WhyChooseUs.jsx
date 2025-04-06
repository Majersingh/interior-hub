'use client'

import { motion } from 'framer-motion'

export const WhyChooseUs = () => {
  return (
    <section className="pt-10 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why Choose InteriorHub
          </h2>
          <p className="text-xl text-gray-600">
            Infuse artistry and a unique personality into your space with exquisite
            artifacts.
          </p>
          <div className="text-secondary text-lg font-semibold">
            — Creative Director
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {[
            {
              title: 'Expert Design Team',
              description:
                'Our experienced designers bring creativity and expertise to every project.',
            },
            {
              title: 'Quality Materials',
              description:
                'We use only the finest materials to ensure lasting beauty and durability.',
            },
            {
              title: 'Personalized Service',
              description:
                'Every project is unique, and we tailor our services to your specific needs.',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 