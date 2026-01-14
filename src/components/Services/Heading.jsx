import React from 'react'
import { motion } from 'motion/react'

const Heading = ({text}) => {
  return (
    <motion.h1
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
    className='text-3xl sm:text-5xl'>{text}</motion.h1>
  )
}

export default Heading