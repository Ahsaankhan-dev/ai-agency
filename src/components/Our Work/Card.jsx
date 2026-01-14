import React from 'react'
import { motion } from 'motion/react'

const Card = ({img,title,text,index}) => {
  return (
    <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:index*0.2}}
        viewport={{once:true}}
    className='text-start hover:scale-102 cursor-pointer transition-all duration-400 ease-in-out'>
            <img src={img}/>
            <h1 className='text-lg mt-3 mb-1 font-semibold'>{title}</h1>
            <p className='opacity-60 dark:text-white w-5/6 text-sm'>{text}</p>
    </motion.div>
  )
}

export default Card