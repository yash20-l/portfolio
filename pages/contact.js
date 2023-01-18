import React from 'react'
import Footer from '../components/Footer'
import { AiOutlineMail } from "react-icons/ai"
import { FiPhoneCall } from 'react-icons/fi'
import Head from 'next/head'
import Header from '../components/Header';
import BlogNavbar from '../components/blog/BlogNavbar'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Atal Infotech</title>
                <link rel="icon" href="/yash.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/yash.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
            </Head>
            <BlogNavbar></BlogNavbar>
            <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" className=" fixed h-[60px] w-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[38px] z-[100]" rel="noreferrer" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
            <div className="wrapper bg-[#2e2e2e] h-full px-[rem] px-4 py-[2rem]">
                <div className="text py-4  flex flex-row items-center">
                    <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
                    <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Contact Us</h1>
                </div>
                <div className="contactus-section md:grid md:grid-cols-2 px-[2rem] md:px-[4rem] lg:px-[6rem] md:gap-4">
                    <div className="call flex flex-col py-4">
                        <div className="text text-left">
                            <h2 className='text-xl text-[#00d69a] py-2 text-left' style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Call Us:
                            </h2>
                        </div>
                        <div className="logo flex flex-row">
                            <div className="logo px-2">
                                <FiPhoneCall size={30} color='#00d69a'></FiPhoneCall>
                            </div>
                            <div className="text px-2">
                                <h2 className='text-lg text-[#00d69a]' style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    +91 9115479004
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mail flex flex-col  py-4">
                        <div className="text text-left">
                            <h2 className='text-xl text-[#00d69a] py-2 text-left' style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Mail Us:
                            </h2>
                        </div>
                        <div className="logo flex flex-row">
                            <div className="logo px-2">
                                <AiOutlineMail size={30} color='#00d69a'></AiOutlineMail>
                            </div>
                            <div className="text px-2">
                                <h2 className='text-lg text-[#00d69a]' style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    atalinfotech19@gmail.com
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Contact