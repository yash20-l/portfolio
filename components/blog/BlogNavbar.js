import { React, useRef, useState } from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillThunderbolt, AiFillCheckCircle } from 'react-icons/ai'
import LoadingBar from 'react-top-loading-bar';
import { HiMenuAlt3 } from "react-icons/hi"
import Image from 'next/image'
import Link from 'next/link'


const BlogNavbar = () => {
    const loadingRef = useRef(null)
    let Links = [
        { name: "HOME", link: "/" },
        { name: "WEBSITE SERVICES", link: "/web-services" },
        { name: "DIGITAL MARKETING", link: "/digital-marketing" },
        { name: "CONTACT US", link: "/contact" }
    ];
    let [open, setOpen] = useState(false);
    return (
        <div>
            <div className="headers z-[2] w-full top-0 static" id='headers'>
                <div className="strip px-4 h-auto bg-blue-600 py-[.5rem] flex flex-row items-center justify-between">
                    <div className="social-media flex flex-row items-center justify-center">
                        <span className='text-white pz-2'>Follow Us:</span>
                        <div className="icons px-2 flex flex-row items-center justify-center">
                            <a href="https://www.instagram.com/atalinfotech/"><AiFillInstagram size={20} color="white" className='mx-2'></AiFillInstagram></a>
                            <a href="#"><AiFillTwitterCircle size={20} color="white" className='mx-2'></AiFillTwitterCircle></a>
                            <a href="https://www.facebook.com/atalinfotech19/"><AiFillFacebook size={20} color="white" className='mx-2'></AiFillFacebook></a>
                        </div>
                    </div>
                    <div className="contactinfo flex flex-row items-center justify-center hidden md:block">
                        <span className='text-white px-2'>atalinfotech19@gmail.com</span>
                        <span className='text-white px-2'>+91 9115479004</span>
                    </div>
                </div>
            </div>

            <div className='shadow-md w-full fixed top-0 left-0 z-[100] bg-[#040d23]'>
                <div className='md:flex items-center bg-[#040d23] justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl bg-[#040d23] cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                        <div className="logowrapper flex flex-row items-center justify-center">
                            <div className="logo">
                                <Image src={'/logo3.jpg'} priority height={50} width={50} alt='logo'></Image>
                            </div>
                            <div className="text px-2">
                                <h2 className='text-[1.2rem] text-[#61e1e8]' style={{ fontFamily: 'Quicksand, sans-serif' }}>Atal Infotech</h2>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <HiMenuAlt3 size={30} color="#61e1e8"></HiMenuAlt3>
                    </div>

                    <ul className={`md:flex  bg-[#040d23] md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-[1rem] md:my-0 my-7'>
                                    <Link onClick={() => {loadingRef.current.complete()}} href={link.link} className='text-white hover:text-[#61e1e8] duration-500'>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <LoadingBar
                color='#f11946'
                height = {3}
                loaderSpeed = {5000}
                ref = {loadingRef}
            />
        </div>
    )
}

export default BlogNavbar