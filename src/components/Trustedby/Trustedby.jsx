import React from 'react'
import assets, { company_logos } from '../../assets/assets'
import { motion } from 'motion/react'

const Trustedby = () => {
  return (
    <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
    className='flex flex-col gap-10 dark:text-white/80 text-gray-700 items-center px-4 xl:px-40 lg:px-24 sm:px-12'>
        <motion.h3
         initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        viewport={{once: true}}>Trusted by Leading Companies</motion.h3>
        <motion.div
         initial="hidden"
        whileInView="visible"
        transition={{staggerChildren:0.1}}
        viewport={{once: true}}
        className='flex gap-10 items-center justify-center flex-wrap font-semibold'>{company_logos.map((img)=>(
            <motion.img
            variants={{
              hidden:{opacity:0,y:10},
              visible:{opacity:1,y:0}
            }}
            transition={{duration:0.4}}
            src={img} className='max-h-5 sm:max-h-6'/>
        ))}</motion.div>
    </motion.div>
  )
}

export default Trustedby