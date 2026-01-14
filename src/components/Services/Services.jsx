import React from 'react'
import Para from '../Home/Para'
import assets from '../../assets/assets'
import Card from './Card'
import Heading from './Heading'
import HeadingPara from './HeadingPara'
import { motion } from 'motion/react'

const Services = () => {

   const ServiceData=[
    {img:assets.ads_icon, title:'Advertising', text:'We turn bold ideas into powerful digital solutions that connect, engage...'},
    {img:assets.marketing_icon, title:'Content marketing', text:'We help you execute your plan and deliver results.'},
    {img:assets.content_icon, title:'Content writing', text:'We help you create a marketing strategy that drives results.'},
    {img:assets.social_icon, title:'Social media', text:'We help you build a strong social media presence and engage with your audience.'}
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