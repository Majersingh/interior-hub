'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Fragment, useRef } from 'react'

const posts = [
  { image: '/IMG_6045.JPG', caption: 'Modern false ceiling with embedded green strip lights' },
  { image: '/IMG_6046.JPG', caption: 'POP ceiling design featuring layered patterns and soft glow' },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    caption: 'Vintage furniture: timeless pieces that bring character and charm.',
  },
  { image: '/IMG_6041.JPG', caption: 'Elegant false ceiling concept with dynamic neon accents' },
  { image: '/IMG_6044.JPG', caption: 'Creative POP ceiling design for a stylish living room' },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    caption: 'Decorating a wooden console table enhances your living space.',
  },
  {
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    caption: 'Celebrating design excellence and creativity with InteriorHub.',
  },
  { image: '/IMG_6042.JPG', caption: 'Create a relaxing atmosphere in your bedroom with our new designs.' },
  { image: '/IMG_6043.JPG', caption: 'Elegant false ceiling concept with dynamic neon accents' },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    caption: 'Create a relaxing atmosphere in your bedroom with our new designs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    caption: 'Benches that blend functionality with timeless style.',
  },
  { image: '/IMG_6039.JPG', caption: 'Sleek false ceiling with recessed lighting and LED highlights' },
  { image: '/IMG_6040.JPG', caption: 'Contemporary POP false ceiling with ambient lighting effects' },
]

export const VideoFeed = () => {
  return (
    <section className="py-10 bg-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <p className="text-3xl text-center pb-10 md:text-4xl font-bold text-primary">
          Our Galleries
        </p>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
           <Fragment key={index+'wer'}>
           {index<6 && <Video  key={index+'dcvb'} index={index}/>}
            <motion.div
              key={index +'yhjkm'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600">{post.caption}</p>
              </div>
            </motion.div>
          </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
} 


 const Video = ({index}) => {
  const videoRefs = useRef([])

  const posts = [
    { video: '/IMG_6048.MP4', caption: 'Modern false ceiling with embedded neon strip lights' },
    { video: '/IMG_6070.MP4', caption: 'Creative POP ceiling design for a stylish living room' },
    { video: '/IMG_6071.MP4', caption: 'Sleek false ceiling with recessed lighting and LED highlights' },
    { video: '/IMG_6072.MP4', caption: 'POP ceiling design featuring layered patterns and soft glow' },
    { video: '/IMG_6073.MP4', caption: 'Elegant false ceiling concept with dynamic neon accents' },
    { video: '/IMG_6074.MP4', caption: 'Contemporary POP false ceiling with ambient lighting effects' },
  ]
  const post=posts[index]
  

  const handleEnter = (index) => {
    const video = videoRefs.current[index]
    if (video) video.play().catch(() => {})
  }

  const handleLeave = (index) => {
    const video = videoRefs.current[index]
    if (video) video.pause()
  }

  return (
      <>
          {
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onViewportEnter={() => handleEnter(index)}
              onViewportLeave={() => handleLeave(index)}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={post.video}
                  muted
                  playsInline
                  loop
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600">{post.caption}</p>
              </div>
            </motion.div>
          }
      </>
  )
}
