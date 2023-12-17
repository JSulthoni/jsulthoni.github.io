import React, { useState } from 'react';
import SVANEFRONTEND from '../assets/projects/SVANEFRONTEND.png'
import SVANEBACKEND from '../assets/projects/SVANEBACKEND.png'
import Modal from './modal';

const projectArray = [
    {
        name: 'SVANE',
        url: 'https://svane.onrender.com/',
        code: 'https://github.com/JSulthoni/SVANE-frontend',
        image: SVANEFRONTEND,
        desc: 'SVANE is my solo fullstack project initially developed to create an online shop with responsive UI. SVANE use React for frontend library, Redux for state manager, and SCSS for styling.'
    },
    {
        name: 'SVANE SERVER',
        url: '',
        code: 'https://github.com/JSulthoni/SVANE-backend',
        image: SVANEBACKEND,
        desc: 'SVANE SERVER is a fast and secure backend server built using NodeJS, Express, Mongoose, and MongoDB. It was built to serve as the backend for SVANE online shop.'
    }
]

const Project = () => {
    const [openModal, setOpenModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    const setModal = (index) => {
        setOpenModal((prevState) => !prevState);
        setModalData(openModal ? null : projectArray[index])
    };


    return (
        <section name='project' className='relative w-full h-screen text-zinc-950 dark:text-sky-50 bg-slate-50 dark:bg-slate-950 border-b border-slate-800 grid items-center transition-all duration-700'>
            
            {/* Container */}
            <div className='__hide relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-400 text-zinc-950 dark:text-sky-50'>Projects</p>
                    <p className='py-4 text-zinc-950 dark:text-sky-50'>// Click on pictures for more details!</p>
                </div>

            {/* Card Container */}
                <div className='relative grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-2'>

                {/* Card Item */}{/* Hover Effects */}
                    {projectArray.map((project, index) => (
                    <div 
                        onClick={() => setModal(index)}
                        key={index}
                        style={{'background-image': `url(${project.image})`}}
                        className='cursor-pointer group container flex justify-center items-center mx-auto border border-solid border-sky-600 dark:border-sky-900 __content-div'>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity ease duration-250'>
                            <h3 className='text-2xl font-bold text-sky-950 tracking-wider text-center bg-sky-50 opacity-80'>
                                {project.name}
                            </h3>
                            <div className='pt-8 text-center text-zinc-950 dark:text-sky-50 font-bold'>
                                {project.url && 
                                <a href={project.url} target='_blank' rel='noreferrer'>
                                    <button className='text-center px-4 py-3 m-2 bg-sky-400 text-lg'>Demo</button>
                                </a>
                                }
                                <a href={project.code} target='_blank' rel='noreferrer'>
                                    <button className='text-center px-4 py-3 m-2 bg-sky-400 first:text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div 
                onClick={() => setModal()} 
                className={`${openModal ? '__modalopen' : '__modalclose'} fixed mx-auto h-screen inset-0 md:p-10 md:w-auto dark:bg-slate-900 dark:bg-opacity-75 bg-sky-900 bg-opacity-75`}>
            <Modal data={modalData} setModal={setModal}/>
            </div>
        </section>
    );
}

export default Project;
