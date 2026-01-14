import React, { useEffect } from 'react'
import assets from '../../assets/assets'

const Togletheme = ({Theme,setTheme}) => {
    useEffect(()=>{
        const prefersfordark=window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(Theme||(prefersfordark?'dark':'light'))
    },[])

    useEffect(()=>{
        if(Theme==='dark'){
            document.documentElement.classList.add('dark')
        } else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('Theme',Theme);
    },[Theme])
  return (
    <button>
  {
    Theme==='dark'?(
        <img
        src={assets.sun_icon}
        onClick={()=>setTheme('light')}
        className='rounded-full border size-8.5 border-gray-500 p-1.5 cursor-pointer'
        />
    ):(
        <img
        src={assets.moon_icon}
        onClick={()=>setTheme('dark')}
        className='rounded-full border size-8.5 border-gray-500 p-1.5 cursor-pointer'
        />        
    )
    }
    </button>
  )
}

export default Togletheme
