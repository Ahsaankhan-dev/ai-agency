import React from 'react'
import assets from '../../assets/assets'
import Para from './Para'
import { motion } from 'motion/react'


const Home = ({Theme,setTheme}) => {
  return (
    <div id='Home' className='flex min-h-screen overflow-hidden text-center w-full flex-col items-center gap-6 px-4 py-20 xl:px-40 lg:px-24 sm:px-12'>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.7}}
        viewport={{once: true}}
        className='flex items-center pl-2 pr-4 py-1 gap-2 border border-gray-300 rounded-4xl dark:text-white'>
            <img src={assets.group_profile} className='w-20'/>
            <p className='text-xs'>Trusted by 10k+ people</p>
        </motion.div >
          <motion.h1
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,delay:0.8}}
          viewport={{once: true}}
          className='xl:text-[84px] text-4xl sm:text-5xl md:text-6xl font-medium text-gray-700 xl:leading-[95px] dark:text-white max-w-5xl'>Turning imagination into <span className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.</motion.h1>
          <Para
          text="Creating meaningful connections and turning big ideas into interactive digital experiences."/>
         <motion.div
         initial={{opacity:0,scale:0.9}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:0.6,delay:2}}
        viewport={{once: true}}
         className='relative'>
          <img src={assets.hero_img} className='w-full max-w-6xl'/>
          <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
         </motion.div>
    </div>
  )
}

export default Home