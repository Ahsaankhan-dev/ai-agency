import React, { useState } from 'react'
import assets from '../../assets/assets'
import Togletheme from './Togletheme'
import { motion } from 'motion/react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = ({ Theme, setTheme }) => {

  const [Sidebar, setSidebar] = useState(false)
  const Navigater = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      className='flex justify-between items-center sticky top-0 px-4 py-4 xl:px-40 lg:px-24 sm:px-12 bg-white/70 backdrop-blur-xl dark:bg-gray-900/70 z-20'>
      <span className='flex items-baseline'>
        <span className='oxygen-logo sm:text-[25px] text-[22px] text-gray-700/90 dark:text-white tracking-tight'>
          Oxygen
        </span>
        <span className='io-logo inline-block sm:text-[18px] text-[15px] leading-none tracking-[-0.02em] bg-linear-to-r from-[#392ce6] to-[#326bc0] bg-clip-text text-transparent'>
    .io
  </span>
      </span>
      <div className='sm:gap-5 sm:text-gray-700 max-sm:hidden sm:flex dark:text-white'>
        <Link to='Home' smooth={true} ><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]'>Home</a></Link>
        <Link to='Services' smooth={true} offset={50}><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]'>Services</a></Link>
        <Link to='Our Work' smooth={true} offset={30}><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]'>Our Work</a></Link>
        <Link to='Contact Us' smooth={true} offset={60}><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]'>Contact Us</a></Link>
      </div>
      <div className='flex gap-4'>
        <Togletheme Theme={Theme} setTheme={setTheme} />
        <SignedOut>
          <SignInButton mode='modal'>
            <button className='hidden items-center px-6 py-2 text-sm rounded-3xl bg-[#5044e5] text-white hover:scale-105 transition-all duration-400 ease-in-out'>Login <img src={assets.arrow_icon} className='size-4' /></button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="sm:block max-sm:hidden">
            <UserButton />
          </div>
        </SignedIn>
        <img src={Theme === 'light' ? assets.menu_icon : assets.menu_icon_dark} className='hidden max-sm:block w-8 cursor-pointer' onClick={() => setSidebar(true)} />
      </div>
      <div className={`max-sm:fixed sm:hidden max-sm:top-0 max-sm:right-0 max-sm:bg-primary max-sm:h-screen ${Sidebar ? 'max-sm:w-60 max-sm:opacity-100' : 'max-sm:w-0 max-sm:opacity-0'} max-sm:overflow-hidden max-sm:text-white transition-all duration-700 ease-in-out`}>
        <img src={assets.close_icon} className={`size-5 ${Sidebar ? 'max-sm:block max-sm:fixed max-sm:top-4 max-sm:right-4' : 'max-sm:hidden'} max-sm:cursor-pointer sm:hidden`} onClick={() => setSidebar(false)} />
        <div className='max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:mt-20 max-sm:ml-10'>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='hidden justify-center gap-2 items-center px-6 py-2 text-sm rounded-3xl bg-black/75 text-white hover:scale-105 transition-all duration-400 ease-in-out'>Login <img src={assets.arrow_icon} className='size-4' /></button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link to='Home' smooth={true} ><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]' onClick={() => setSidebar(false)}>Home</a></Link>
          <Link to='Services' smooth={true} offset={50}><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]' onClick={() => setSidebar(false)}>Services</a></Link>
          <Link to='Our Work' smooth={true} offset={30}><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]' onClick={() => setSidebar(false)}>Our Work</a></Link>
          <Link to='Contact Us' smooth={true} offset={60}><a className='text-sm font-medium cursor-pointer sm:hover:border-b max-sm:text-[16px] dark:text-[14px]' onClick={() => setSidebar(false)}>Contact Us</a></Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
// onClick={()=>Navigater("/Login")}