import React from 'react'
import Heading from '../Services/Heading'
import HeadingPara from '../Services/HeadingPara'
import assets from '../../assets/assets'
import Card from './Card'
import { motion } from 'motion/react'

const OverWork = () => {

   const WorkData=[
    {img:assets.work_mobile_app,Title:'Mobile app marketing',text:'We turn bold ideas into powerful digital solutions that connect, engage...'},
    {img:assets.work_dashboard_management,Title:'Dashboard management',text:'We help you execute your plan and deliver results.'},
    {img:assets.work_fitness_app,Title:'Fitness app promotion',text:'We help you create a marketing strategy that drives results.'}
]

  return (
    <motion.div
    id='Our Work'
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    className='flex items-center flex-col text-center gap-7 pt-30 min-h-screen px-4 xl:px-40 lg:px-24 sm:px-12'>
        <Heading text="Our latest work"/>
        <HeadingPara text="From strategy to execution, we craft digital solutions that move your business forward."/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-6'>
        {WorkData.map((Data,index)=>(
            <Card img={Data.img} title={Data.Title} text={Data.text} index={index} key={index}/>
        ))}
        </div>
    </motion.div>
  )
}

export default OverWork