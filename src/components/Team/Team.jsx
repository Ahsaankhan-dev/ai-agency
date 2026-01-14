import React from 'react'
import Heading from '../Services/Heading'
import HeadingPara from '../Services/HeadingPara'
import { teamData } from '../../assets/assets'
import { motion } from 'motion/react'
import Card from './Card'

const Team = () => {
  return (
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{once:true}}
     transition={{staggerChildren:0.2}}
    className='flex items-center flex-col text-center gap-7 pt-30 px-4 xl:px-40 lg:px-24 sm:px-12'>
      <Heading text="Meet the team"/>
      <p className='dark:text-white/75 text-gray-500 max-w-lg mb-5'>A passionate team of digital experts dedicated to your brands success.</p>
      <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
        {
            teamData.map((data,index)=>(
             <Card data={data} index={index} key={index}/>
            ))
        }
      </div>
    </motion.div>
  )
}

export default Team