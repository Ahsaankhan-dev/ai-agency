import React from 'react'
import Para from '../Home/Para'
import assets from '../../assets/assets'
import Card from './Card'
import Heading from './Heading'
import HeadingPara from './HeadingPara'
import { motion } from 'motion/react'

const Services = () => {

   const ServiceData=[
    {img:assets.ads_icon, title:'AI Solutions', text:'We build intelligent AI-powered systems that automate, optimize, and transform your business operations.'},
    {img:assets.marketing_icon, title:'Software Development', text:'We craft robust, scalable software tailored to your business needs and goals.'},
    {img:assets.content_icon, title:'Website Development', text:'We design and develop fast, modern, and responsive websites that leave a lasting impression.'},
    {img:assets.social_icon, title:'Application Development', text:'We build powerful mobile and web applications that deliver seamless user experiences.'},
    {img:assets.ads_icon, title:'Prompt Engineering', text:'We engineer precise and effective AI prompts that maximize the performance of your AI tools.'}
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
      <div className='flex flex-col md:grid md:grid-cols-2'>
      {ServiceData.map((card,indx)=>(
        <Card card={card} key={indx} index={indx}/>
      ))}
      </div>
    </motion.div>
  )
}

export default Services