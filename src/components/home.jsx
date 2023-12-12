import React from 'react';
import { Link } from 'react-scroll'
import { HiArrowNarrowDown, HiOutlineMail } from 'react-icons/hi';

// Fix button later

const Home = () => {
    return (
        <section name='home' className='w-full h-screen bg-slate-50 dark:bg-slate-950 border-b border-slate-800 grid items-center transition-all duration-700'>

            {/* Container */}
            <div className='__hide max-w-[1000px] w-[100%] mx-auto px-8 flex flex-col justify-center'>
                <p className='text-zinc-950 dark:text-sky-400'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-sky-950 dark:text-sky-50'>Javier Sulthoni</h1>
                <h2 className='text-4xl sm:text-7xl font bold text-sky-400 dark:text-sky-500'>I'm a web developer</h2>
                <p className='text-zinc-950 dark:text-sky-50 py-4 max-w-700px text-base sm:text-3xl'>focusing in web applications and responsive UI design using React and Node.</p>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-5 text-sky-950 dark:text-sky-50'>
                    <Link 
                        to="project" 
                        smooth={true} 
                        duration={500}
                        rel="noreferrer" 
                        >
                        <button className='py-4 text-zinc-950 dark:text-sky-50 group border-2 px-6 flex items-center justify-center w-[200px] hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-sky-950 dark:hover:border-sky-50'>
                            View Works
                            <HiArrowNarrowDown className='ml-3'/>
                        </button>
                    </Link>
                    <a 
                        href="mailto:sulthonijavier@gmail.com"  
                        target="_blank" 
                        rel="noreferrer" 
                        className='py-3 text-zinc-950 dark:text-sky-50 group border-2 px-6 flex items-center justify-center w-[200px] hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-sky-950 dark:hover:border-sky-50'>
                            Reach out!
                            <HiOutlineMail size={30} className='ml-3'/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
