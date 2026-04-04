import React from 'react'
import assets from '../../assets/assets'
import { motion } from 'motion/react'
import { Link } from 'react-scroll'

const Footer = ({ Theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='flex items-center flex-col text-center gap-7 pt-10 mt-30 px-4 xl:px-40 lg:px-24 sm:px-12 dark:bg-gray-900'>
      <div className='flex max-lg:flex-col w-full justify-between gap-10'>

        {/* Left - Logo + nav */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-start dark:text-gray-400 flex flex-col gap-4'>
          <span className='flex items-baseline'>
            <span className='oxygen-logo sm:text-[25px] text-[22px] text-gray-700 dark:text-white tracking-tight'>
              Oxygen
            </span>
            <span className='io-logo inline-block sm:text-[18px] text-[15px] leading-none tracking-[-0.02em] bg-linear-to-r from-[#392ce6] to-[#326bc0] bg-clip-text text-transparent'>
              .io
            </span>
          </span>
          <p className='text-sm max-w-md text-gray-500 dark:text-gray-400'>From strategy to execution, we craft digital solutions that move your business forward.</p>
          <div className='sm:gap-6 max-sm:hidden sm:flex dark:text-gray-400'>
            <Link to='Home' smooth={true}><a className='text-sm font-medium cursor-pointer sm:hover:text-primary max-sm:text-[16px] dark:text-[14px]'>Home</a></Link>
            <Link to='Services' smooth={true} offset={50}><a className='text-sm font-medium cursor-pointer sm:hover:text-primary max-sm:text-[16px] dark:text-[14px]'>Services</a></Link>
            <Link to='Our Work' smooth={true} offset={30}><a className='text-sm font-medium cursor-pointer sm:hover:text-primary max-sm:text-[16px] dark:text-[14px]'>Our Work</a></Link>
            <Link to='Contact Us' smooth={true} offset={60}><a className='text-sm font-medium cursor-pointer sm:hover:text-primary max-sm:text-[16px] dark:text-[14px]'>Contact Us</a></Link>
          </div>
        </motion.div>

        {/* Right - Contact info instead of subscribe */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-start flex flex-col gap-4 dark:text-gray-400'>
          <h1 className='font-semibold text-gray-800 dark:text-white text-lg'>Get In Touch</h1>
          <p className='text-sm text-gray-500 dark:text-gray-400 max-w-xs'>Have a project in mind? We would love to help you build something great. Reach out to us anytime.</p>
          <div className='flex flex-col gap-3 mt-1'>
            <div className='flex items-center gap-2'>
              <img src={assets.email_icon} className='w-4 opacity-60' />
              <p className='text-sm text-gray-500 dark:text-gray-400'>chmisam.143@gmail.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={assets.person_icon} className='w-4 opacity-60' />
              <p className='text-sm text-gray-500 dark:text-gray-400'>www.oxygen.io</p>
            </div>
          </div>


          {/* Subscribe - hidden but code kept */}
          <div className='hidden'>
            <h1>Subscribe to our newsletter</h1>
            <p className='text-sm'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='flex gap-2 mt-4'>
              <input className='py-3 outline-none border border-gray-300 dark:border-gray-600 rounded-md flex-1 px-4 text-sm' type="text" placeholder='Enter your email' />
              <button className='py-3 px-6 rounded-md bg-primary text-white text-sm'>Subscribe</button>
            </div>
          </div>
        </motion.div>

      </div>
      <div className='border-t border-gray-300 dark:border-gray-600 flex justify-between w-full max-sm:flex-col max-sm:gap-5 items-center py-5'>
        <p className='text-sm text-gray-500'>Copyright 2025 © Oxygen.io — All Rights Reserved.</p>
        <div className='flex gap-4'>
          <img src={assets.facebook_icon} />
          <img src={assets.twitter_icon} />
          <img src={assets.instagram_icon} />
          <img src={assets.linkedin_icon} />
        </div>
      </div>
    </motion.div>
  )
}

export default Footer