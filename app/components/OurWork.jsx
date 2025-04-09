'use client'

import { useState ,useRef ,useEffect} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
  { id: 'residential', name: 'Residential' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'commercial', name: 'Commercial' },
]

const projects = {
  residential: [
    {
      title: 'Modern Villa',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Luxury Apartment',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ],
  hospitality: [
    {
      title: 'Boutique Hotel',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ],
  commercial: [
    {
      title: 'Office Space',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Retail Store',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ],
}

export const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('residential')
  const tabRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const activeTab = tabRefs.current[categories.findIndex(cat => cat.id === activeCategory)];
    if (activeTab) {
      const { offsetLeft, offsetWidth } = activeTab;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeCategory]);


  return (
    <section id='our-works' className="">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
        <p className="text-3xl text-center md:text-4xl font-bold text-primary">
         Our Work Category
        </p>
        </motion.h2>

        <div
            className="flex flex-row bg-slate-100 w-full overflow-hidden justify-evenly items-center bg-secondary transition-all duration-300 rounded-lg"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full py-3 lg:text-2xl  text-gray-700  transition-colors duration-200 focus:outline-none ${
                activeCategory === category.id
                  ? 'text-secondary font-bold  underline'
                  : 'text-primary hover:text-secondary'
              }`}
            >
              {category.name}
            </button>
          ))}
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects[activeCategory].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-60" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  {/* <button className="btn bg-secondary hover:bg-secondary/90">
                    View Project
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
