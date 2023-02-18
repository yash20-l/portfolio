import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="footerWrapper bg-gray-800 px-2 md:px-[6rem]  lg:px-[10rem] py-8">
            <div className="subwrapper md:grid md:grid-cols-3 md:gap-4">
                <div className="services">
                    <div className="services heading py-4">
                        <h2 className='text-xl text-white'>Services</h2>
                    </div>
                    <div className="ulWrapper py-4 rounded-xl">
                        <ul className='list-inside list-disc'>
                            <li className='text-white list-item text-lg'>Digital Marketing</li>
                            <li className='text-white list-item text-lg'>Website Services</li>
                            <li className='text-white list-item text-lg'>Social Media Handle</li>
                            <li className='text-white list-item text-lg'>UI/UX Services</li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <div className="heading py-4">
                        <h2 className="text-xl text-white">Contact</h2>
                    </div>
                    <div className="ul py-4 rounded-xl">
                        <ul>
                            <li className='text-white text-lg'>Mail us at <a href="https://atalinfotech19@gmail.com" rel="noreferrer" target={'_blank'}>atalinfotech19@gmail.com</a></li>
                            <li className='text-white text-lg'>Contact us on +91 91154-79004</li>
                        </ul>
                    </div>
                </div>
                <div className="SocialMedia">
                    <div className="heading py-4">
                        <h2 className="text-xl text-white">Follow Us</h2>
                    </div>
                    <div className="social-icons py-4 flex flex-row">
                        <a href="https://www.instagram.com/atalinfotech/" target="_blank" rel='noreferrer'><div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
                            <AiFillInstagram color='#ffffff' size={20}></AiFillInstagram>
                        </div></a>
                        <a href="https://www.facebook.com/atalinfotech19/" target="_blank" rel='noreferrer'><div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
                            <AiFillFacebook color='#ffffff' size={20}></AiFillFacebook>
                        </div></a>
                        <a href="https://www.twitter.com/atal_infotech/" target="_blank" rel='noreferrer'><div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
                            <AiFillTwitterCircle color='#ffffff' size={20}></AiFillTwitterCircle>
                        </div></a>
                    </div>
                </div>
            </div>
            <div className="copyright-info my-4">
                <span className='text-white text-lg'>Copyright © 2023-2024 Atal Infotech | All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer