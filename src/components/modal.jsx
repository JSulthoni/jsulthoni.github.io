import React, { useEffect } from 'react';
import { CgCloseR } from "react-icons/cg";

const Modal = ({data, setModal}) => {
        
    // Disable scroll event if modal is opened
    const isData = Boolean(data)
    useEffect(() => {
        const preventDefaultHandler = (event) => event.preventDefault();
        
        if (isData) {
            window.addEventListener('wheel', preventDefaultHandler, { passive: false });
            window.addEventListener('touchmove', preventDefaultHandler, { passive: false });
        } else {
            window.removeEventListener('wheel', preventDefaultHandler);
            window.removeEventListener('touchmove', preventDefaultHandler);
        }

        return () => {
            window.removeEventListener('wheel', preventDefaultHandler);
            window.removeEventListener('touchmove', preventDefaultHandler);
        }
    }, [isData])

    return (
            <div onClick={(event) => event.stopPropagation()} className='w-full inset-0 m-auto flex justify-center align-middle'>
                <div className='relative m-auto w-fit max-w-[1400px]'>
                    <CgCloseR className='absolute bg-slate-950 top-5 right-5 text-sky-50 text-4xl cursor-pointer' onClick={() => setModal()}/>
                    <img className='w-screen sm:w-auto max-w-[1400px] mx-auto' src={data?.image} loading='eager' alt='modal image'/>
                    <p className='w-full max-w-[1400px] mx-auto text-zinc-950 dark:text-sky-50 text-base align-middle my-6 text-center bg-sky-50 dark:bg-slate-950 p-2'>
                        {data?.desc}
                    </p>
                    <div className='text-center text-sky-50 font-bold'>
                        {data?.url &&
                        <a href={data?.url} target='_blank' rel='noreferrer'>
                            <button className='text-center px-4 py-3 mx-2 bg-sky-400 text-lg'>Demo</button>
                        </a>
                        }
                        <a href={data?.code} target='_blank' rel='noreferrer'>
                            <button className='text-center px-4 py-3 mx-2 bg-sky-400 first:text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default Modal;
