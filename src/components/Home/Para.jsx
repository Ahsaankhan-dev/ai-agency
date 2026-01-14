import React from 'react'
import { motion } from 'motion/react'

const Para = ({text}) => {
  return (
    <motion.p
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:1}}
      viewport={{once: true}}
      className='max-w-4/5 sm:max-w-lg sm:text-lg max-sm:text-sm text-gray-500 font-medium dark:text-white/75 pb-3'>{text}</motion.p>
  )
}

export default Para