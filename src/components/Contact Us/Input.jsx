import React from 'react'

const Input = ({title,img,placeholder,name}) => {
    return (
        <div className='text-start flex flex-col gap-2'>
            <p className='text-sm'>{title}</p>
            <div className='flex gap-1 items-center border border-gray-300 dark:border-gray-600 p-2 rounded-lg'>
                <img src={img} />
                <input type={name} placeholder={placeholder} name={name} required className='outline-none text-sm px-2 py-1' />
            </div>
        </div>
    )
}

export default Input