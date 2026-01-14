import React from 'react'
import { motion } from 'motion/react'

const HeadingPara = ({text}) => {
  return (
    <motion.p
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
    className='dark:text-white/75 text-gray-500 max-w-xl mb-5'>{text}</motion.p>
  )
}

export default HeadingPara