import { useState } from 'react'
import Heading from '../Services/Heading'
import HeadingPara from '../Services/HeadingPara'
import assets from '../../assets/assets'
import Input from './Input'
import {toast} from 'react-hot-toast'
import { motion } from 'motion/react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "0ad2ff18-b6ac-4bff-9164-c93489085d8a");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Thank you for your submission")
                event.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
           toast.error(error.message)
        }


    };

    return (
        <motion.div
         id='Contact Us'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true}}
         transition={{staggerChildren:0.2}}
        className='flex items-center flex-col text-center gap-7 pt-30 min-h-screen px-4 xl:px-40 lg:px-24 sm:px-12'>
            <Heading text="Reach out to us" />
            <HeadingPara text="From strategy to execution, we craft digital solutions that move your business forward." />
            <motion.form
             initial={{opacity:0,y:30}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.4}}
             viewport={{once: true}}
            onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-5 w-full max-w-2xl  items-start'>
                <Input title="Your name" name="name" img={assets.person_icon} placeholder="Enter your name" />
                <Input title="Email id" name='email' img={assets.email_icon} placeholder="Enter your email" />
                <div className='sm:col-span-2 flex flex-col text-start gap-2'>
                    <p className='text-sm'>Message</p>
                    <textarea name="message" rows={8} required placeholder='Enter your message' className='w-full border border-gray-300 dark:border-gray-600 px-2 py-3 rounded-lg outline-none text-sm'></textarea>
                </div>
                <button type="submit" className='flex gap-2 hover:scale-105 transition-all duration-400 ease-in-out items-center w-max py-3 px-10 text-sm rounded-full bg-primary text-white'><span>Submit</span> <img src={assets.arrow_icon} /></button>
            </motion.form>
        </motion.div>
    )
}

export default Contact