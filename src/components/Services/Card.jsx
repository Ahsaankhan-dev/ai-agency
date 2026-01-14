import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const Card = ({ card,index }) => {

    const [style, setstyle] = useState({ x: 0, y: 0 })
    const [Visable, setVisable] = useState(false)
    const divef = useRef(null)
    const Mousehandler = (e) => {
        const bounds = divef.current.getBoundingClientRect();
        setstyle({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }

    return (
        <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:index*0.2}}
        viewport={{once:true}}
        className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10' onMouseEnter={() => setVisable(true)} onMouseLeave={() => setVisable(false)} ref={divef} onMouseMove={Mousehandler}>
            <div className={`max-sm:hidden pointer-events-none blur-2xl bg-linear-to-l from-blue-500 via-indigo-500 to-purple-500 h-[300px] w-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${Visable ? 'opacity-70' : 'opacity-0'}`} style={{ top: style.y - 150, left: style.x - 150 }} />
            <div className='flex items-center overflow-hidden gap-10 md:gap-5 lg:gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='dark:bg-gray-700 rounded-full'>
                    <img src={card.img} className='max-w-24 rounded-full dark:bg-gray-900 m-2' />
                </div>
                <div className='flex-1 mt-2 text-start'>
                    <h1 className='whitespace-nowrap'>{card.title}</h1>
                    <p className='text-sm mt-2 overflow-hidden max-h-10'>{card.text}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Card