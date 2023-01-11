import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillThunderbolt, AiFillCheckCircle } from 'react-icons/ai'
import Navbar from './Navbar'
const Header = (props) => {
  return (
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
                    <Navbar active={props.page}></Navbar>
                </div>
  )
}

export default Header