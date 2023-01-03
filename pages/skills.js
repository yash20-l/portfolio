import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Skills = () => {
    return (
        <>
            <Head>
                <title>My Skills | Atal Infotech</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
            </Head>
            <Navbar active={1}></Navbar>
            <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" className=" fixed h-[60px] w-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[38px] z-[100]" target="_blank" rel="noreferrer">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
            <div className="wrapper bg-[#2e2e2e] h-full px-[2rem] px-4 py-[2rem]">
                <div className="text py-4  flex flex-row items-center">
                    <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
                    <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Our Skills</h1>
                </div>
                <div className="para text-center">
                    <span className='text-white text-lg'>Our team is always curious to learn new technologies to meet the future demand. Some of the commonly used technologies are.</span>
                </div>
                <div className="skills-section w-full rounded-xl lg:px-[10rem] py-[2rem]">
                    <div className="box">
                        {/* <div className="heading text-center py-4">
                            <h2 className='text-[2rem] text-yellow-400'>What I Do</h2>
                        </div> */}
                        <div className="skillsIcons grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/html.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>HTML</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/css.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>CSS</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/javascript.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>JAVASCRIPT</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/nodejs.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>NODE JS</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/django.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>DJANGO</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/flask.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>FLASK</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/react.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>REACT</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/nextjs.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>NEXT JS</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/wordpress.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>WORDPRESS</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/socket.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>SOCKET IO</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem]  rounded-full p-2">
                                        <Image src="/mongo3.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>MONGO DB</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem]  rounded-full p-2">
                                        <Image src="/webrtc.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>WEBRTC</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem]  rounded-full p-2">
                                        <Image src="/agora.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>AGORA</h2>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="image flex flex-row items-center justify-center">
                                    <div className="wrapper relative h-[5rem] w-[5rem] bg-gray-200 rounded-full p-2">
                                        <Image src="/firebase.png" fill alt='skill1'></Image>
                                    </div>
                                </div>
                                <div className="text py-2">
                                    <h2 className='text-white text-center'>FIREBASE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Skills