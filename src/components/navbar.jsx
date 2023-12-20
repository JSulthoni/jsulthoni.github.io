import React, { useContext, useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { Link } from 'react-scroll'
import { PiHandWavingDuotone } from "react-icons/pi";
import { ModeContext } from '../context/modeContext';
import CV from '../assets/CV_Javier-Nauvel-Sulthoni.pdf'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => setOpenMenu(!openMenu);
    const { mode, toggle } = useContext(ModeContext);


    function highfive() {
        alert('High-fived. Thank you!')
    };

    // Disable scroll event if openMenu is truthy
    useEffect(() => {
        const preventDefaultHandler = (event) => event.preventDefault();
        
        if (openMenu) {
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
    }, [openMenu])

    return (
        <div className='fixed z-10 w-full h-[60px] flex justify-between items-center px-4 bg-sky-600 dark:bg-sky-900 text-sky-50'>
            <div className='flex justify-between items-center left-0 ml-[-170px] hover:ml-[0px] duration-300 cursor-pointer'>
                <div className='w-[170px]'>
                    <p  onClick={highfive} className='text-sky-50 my-1'>Give me a high-five!</p>
                </div>
                <PiHandWavingDuotone className='w-[200px] h-full duration-100 ml-[-10px]' style={{width: '50px'}}/>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link 
                        to="home" 
                        smooth={true} 
                        duration={500} 
                        >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        duration={500} 
                        >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link 
                        to="project" 
                        smooth={true} 
                        duration={500} 
                        >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="contact" 
                        smooth={true} 
                        duration={500} 
                        >
                        Contact
                    </Link>
                </li>
                <li>
                    <div className='w-5 h-5 flex items-center cursor-pointer' onClick={toggle}>
                        { mode === 'dark' ? <FaMoon/> : <FaSun /> }
                    </div>
                </li>
            </ul>
            {/* hamburger */}
            <div className='md:hidden z-10 flex gap-4 align-middle cursor-pointer'>
                <div className='text-xl' onClick={toggle}>
                        { mode === 'dark' ? <FaMoon/> : <FaSun /> }
                </div>
                <div className='text-xl' onClick={handleClick}>
                    {!openMenu ? <FaBars /> : <FaTimes />}
                </div>
            </div>

            {/* mobile menu */}
            <ul className={!openMenu ? 'invisible h-0 opacity-0 absolute translate-y-10 overflow-hidden' : 'visible absolute opacity-1 translate-y-0 transition-all duration-300 ease top-0 left-0 w-full h-screen bg-sky-600 dark:bg-sky-950 flex flex-col justify-center items-center origin-top-right'}>
                <li className='py-6 text-2xl'>
                    <Link 
                        onClick={handleClick}
                        to="home" 
                        smooth={true} 
                        duration={500} 
                        >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link 
                        onClick={handleClick}
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        >
                        About
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link 
                        onClick={handleClick}
                        to="skills" 
                        smooth={true} 
                        duration={500} 
                        >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link 
                        onClick={handleClick}
                        to="project" 
                        smooth={true} 
                        duration={500} 
                        >
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link 
                        onClick={handleClick}
                        to="contact" 
                        smooth={true} 
                        duration={500} 
                        >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden sm:flex fixed flex-col top-[35%] left-0 transition-all duration-300 ease'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600 dark:bg-sky-900'>
                        <a className='flex justify-between items-center w-full text-sky-50' rel="noreferrer" href='https://www.linkedin.com/in/javiersulthoni/' target="_blank">LinkedIn <FaLinkedin size={30}/></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600 dark:bg-sky-900'>
                        <a className='flex justify-between items-center w-full text-sky-50' rel="noreferrer" href='https://github.com/JSulthoni' target="_blank">GitHub <FaGithub size={30}/></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600 dark:bg-sky-900'>
                        <a className='flex justify-between items-center w-full text-sky-50' rel="noreferrer" href="mailto:sulthonijavier@gmail.com" target="_blank">Email <HiOutlineMail size={30}/></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600 dark:bg-sky-900'>
                        <a className='flex justify-between items-center w-full text-sky-50' rel="noreferrer" href={CV} target="_blank">CV <BsFillPersonLinesFill size={30}/></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
