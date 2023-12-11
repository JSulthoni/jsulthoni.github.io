import React from 'react';

const About = () => {
    return (
        <section name='about' className=' w-full h-screen bg-slate-50 dark:bg-slate-950 text-zinc-950 dark:text-sky-50 border-b border-slate-800 grid items-center transition-all duration-700'>
            <div className='__hide flex flex-col justify-center items-center w-full'>

                {/* Left Text */}
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl text-zinc-950 dark:text-sky-50 font-bold inline border-b-4 border-sky-400'>About</p>
                    </div>
                    <div></div>
                </div>

                {/* Right Text */}
                <div className='max-w-[1000px] w-full px-4 grid md:grid-cols-2 gap-4 sm:gap-8 text-zinc-950 dark:text-sky-50'>
                    <div>
                        <p className='md:text-right'>
                        Since September 2023 I taught myself to be a web developer. My focus is on implementing practices for quick and powerful web applications. I am dedicated to continuous learning and striving for progress.</p>
                    </div>
                    <div className='text-4xl font-bold my-1 text-zinc-950 dark:text-sky-50'>
                        <p>Please take a look around!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
