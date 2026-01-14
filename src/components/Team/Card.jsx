import React from 'react'
import { motion } from 'motion/react'

const Card = ({data,index}) => {
    return (
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.4,delay:index*0.1}}
        viewport={{once:true}}
        className='flex max-sm:flex-col dark:bg-gray-900 rounded-xl dark:border dark:border-gray-700 shadow-lg dark:shadow-white/5 shadow-gray-100 gap-5 p-4 items-center hover:scale-103 transition-all duration-400 cursor-pointer'>
            <img src={data.image} className='w-12 rounded-full' />
            <div className='text-start'>
                <h1 className='text-sm font-bold'>{data.name}</h1>
                <p className='text-xs opacity-70'>{data.title}</p>
            </div>
        </motion.div>
    )
}

export default Card