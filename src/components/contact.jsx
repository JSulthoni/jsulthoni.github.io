import React from 'react';
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
    return (
        <section name='contact' className='w-full h-screen grid items-center bg-slate-50 dark:bg-slate-950 p-4 border-b border-slate-800 transition-all duration-700'>

            {/* Buttons */}
            <div className='__hide flex flex-col items-center mx-auto max-w-[1000px] w-full'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-400 text-zinc-950 dark:text-sky-50'>Hire me</p>
                <a href="mailto:sulthonijavier@gmail.com" target="_blank" className='text-zinc-950 dark:text-sky-50 group border-2 px-6 py-2 mt-8 my-2 flex items-center justify-center w-[200px] hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-sky-950 dark:hover:border-sky-50'><HiOutlineMail size={30}/></a>
                <a href="https://www.linkedin.com/in/javiersulthoni/" target="_blank" className='text-zinc-950 dark:text-sky-50 group border-2 px-6 py-2 my-2 flex items-center justify-center w-[200px] hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-sky-950 dark:hover:border-sky-50'><FaLinkedin size={30}/></a>
                <p className='sm:hidden text-4xl font-bold inline border-b-4 pt-8 border-sky-400 text-zinc-950 dark:text-sky-50'>Get deeper look</p>
                <a href="https://github.com/JSulthoni" target="_blank" className='sm:hidden text-zinc-950 dark:text-sky-50 group border-2 px-6 py-2 mt-8 my-2 flex items-center justify-center w-[200px] hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-sky-950 dark:hover:border-sky-50'><FaGithub size={30}/></a>
                <a href="" target="_blank" className='sm:hidden text-zinc-950 dark:text-sky-50 group border-2 px-6 py-2 my-2 flex items-center justify-center w-[200px] hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-sky-950 dark:hover:border-sky-50'><BsFillPersonLinesFill size={30}/></a>
            </div>    
        </section>
    );
}


export default Contact;