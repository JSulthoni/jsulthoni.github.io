import React, { useEffect } from 'react';
import { CgCloseR } from "react-icons/cg";

const Modal = ({data, setModal}) => {

    const isData = Boolean(data)

    // Disable scroll event if modal is opened
    useEffect(() => {
        const preventDefaultHandler = (event) => event.preventDefault();
        
        if (isData) {
            window.addEventListener('wheel', preventDefaultHandler, { passive: false })
        } else {
            window.removeEventListener('wheel', preventDefaultHandler);
        }

        return () => {
            window.removeEventListener('wheel', preventDefaultHandler);
        }
    }, [isData])

    return (
            <div onClick={(event) => event.stopPropagation()} className='relative w-[100%] mx-auto my-[50%] md:my-[100px]'>
                <CgCloseR className='absolute top-[-50px] right-5 text-sky-50 text-4xl cursor-pointer' onClick={() => setModal()}/>
                <img className='w-auto md:w-[1400px] mx-auto' src={data?.image} alt='modal image'/>
                <p className='w-auto md:w-[1400px] mx-auto text-slate-950 dark:text-sky-50 text-base align-middle my-6 text-center bg-sky-50 dark:bg-slate-950 p-2'>
                    {data?.desc}
                </p>
                <div className='text-center text-sky-50 font-bold'>
                    <a href={data?.url} target='_blank' rel='noreferrer'>
                        <button className='text-center px-4 py-3 mx-2 bg-sky-400 text-lg'>Demo</button>
                    </a>
                    <a href={data?.code} target='_blank' rel='noreferrer'>
                        <button className='text-center px-4 py-3 mx-2 bg-sky-400 first:text-lg'>Code</button>
                    </a>
                </div>
            </div>
    );
}

export default Modal;
