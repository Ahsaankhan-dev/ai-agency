import React from 'react'
import Para from '../Home/Para'
import assets from '../../assets/assets'
import Card from './Card'
import Heading from './Heading'
import HeadingPara from './HeadingPara'
import { motion } from 'motion/react'

const Services = () => {

   const ServiceData=[
    {img:assets.ads_icon, title:'AI Solutions', text:'We build intelligent AI systems that automate tasks and enhance decision-making for your business goals.'},
    {img:assets.marketing_icon, title:'Software Development', text:'We deliver robust, scalable software using industry best practices aligned with your business goals.'},
    {img:assets.content_icon, title:'Website Development', text:'We craft fast, responsive websites that are visually stunning and optimized for every device and screen.'},
    {img:assets.social_icon, title:'Application Development', text:'We build powerful mobile and web apps that deliver seamless experiences across all platforms.'},
    {img:assets.ads_icon, title:'Prompt Engineering', text:'We engineer precise AI prompts that maximize accuracy, consistency, and real value from your AI tools.'}
   ]

  return (
    <motion.div
    id='Services'
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    className='flex items-center flex-col text-center gap-7 pt-30 min-h-screen px-4 xl:px-40 lg:px-24 sm:px-12'>
      <Heading text="How can we help?"/>
      <HeadingPara text="From strategy to execution, we craft digital solutions that move your business forward."/>
      <div className='flex flex-col md:grid md:grid-cols-2 items-stretch gap-3 sm:gap-3.5 lg:gap-5 w-full max-w-5xl'>
      {ServiceData.map((card,indx)=>(
        <Card card={card} key={indx} index={indx}/>
      ))}
      </div>
    </motion.div>
  )
}

export default Services