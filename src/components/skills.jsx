import React from 'react';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import REACT from '../assets/react.png';
import TAILWIND from '../assets/tailwind.png';
import JAVASCRIPT from '../assets/javascript.png';
import MONGODB from '../assets/mongodb.png';
import NODEJS from '../assets/nodejs.png';
import GITHUB from '../assets/github.png';


const skills = [
    ['HTML', HTML],
    ['CSS', CSS],
    ['JAVASCRIPT', JAVASCRIPT],
    ['REACT', REACT],
    ['TAILWIND', TAILWIND],
    ['NODE JS', NODEJS],
    ['MONGODB', MONGODB],
    ['GITHUB', GITHUB],
]

const Skills = () => {
    return (
        <section name='skills' className='w-full h-screen bg-slate-50 dark:bg-slate-950 border-b border-slate-800 grid items-center transition-all duration-100 md:duration-700'>
            
            {/* Container */}
            <div className='__hide max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-400 text-zinc-950 dark:text-sky-50'>Skills</p>
                    <p className='py-4 text-zinc-950 dark:text-sky-50'>// These are some technologies I have worked with</p>
                </div>
                
                {/* Skill Cards */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-zinc-950 dark:text-sky-50 py-8'>
                    {skills.map((skill, index) => (
                    <div key={index} className=' hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={skill[1]} alt={skill[0].toLowerCase()}/>
                        <p className='my-4'>{skill[0]}</p> 
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
