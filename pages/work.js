import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Work = () => {
    return (
        <>
            <Navbar active={3}></Navbar>
            <div className="wrapper  bg-[#2e2e2e] h-full px-[2rem] px-4 py-[2rem]">
                <div className="text py-4  flex flex-row items-center">
                    <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
                    <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Our Work</h1>
                </div>
                <div className="para text-center">
                    <span className='text-white text-lg'>Here are some demo projects that our team has created.</span>
                </div>
                <div className="boxSection md:grid-cols-2 md:grid md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-16 py-4">
                    <div className="box1 p-4 bg-gray-100 rounded-2xl my-4">
                        <div className="heading py-8 text-center">
                            <h1 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Static Business Website Design</h1>
                        </div>
                        <div className="para text-center">
                            <p className='text-gray-500'>Modern websites need modern user interface for your visiters</p>
                        </div>
                        <div className="moreButton flex py-4 flex-row items-center justify-center">
                            <a href="https://odckrl.vercel.app" target={'_blank'}><button className="py-2 px-10 rounded-2xl bg-[#029e6e] text-white hover:bg-[#01573c]">View Demo</button></a>
                        </div>
                    </div>
                    <div className="box1 p-4 bg-gray-100 rounded-2xl my-4">
                        <div className="heading py-8 text-center">
                            <h1 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Functional Pizza Ordering Website Using Next.js</h1>
                        </div>
                        <div className="para text-center">
                            <p className='text-gray-500'>Modern websites need modern user interface for your visiters</p>
                        </div>
                        <div className="moreButton flex py-4 flex-row items-center justify-center">
                            <button className="py-2 px-10 rounded-2xl bg-[#029e6e] text-white hover:bg-[#01573c]">View Demo</button>
                        </div>
                    </div>
                    <div className="box1 p-4 bg-gray-100 rounded-2xl my-4">
                        <div className="heading py-8 text-center">
                            <h1 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Fully Functional Pizza Ordering Website Using Next.js</h1>
                        </div>
                        <div className="para text-center">
                            <p className='text-gray-500'>Blog Website Using Python Django</p>
                        </div>
                        <div className="moreButton flex py-4 flex-row items-center justify-center">
                            <button className="py-2 px-10 rounded-2xl bg-[#029e6e] text-white hover:bg-[#01573c]">View Demo</button>
                        </div>
                    </div>
                    <div className="box1 p-4 bg-gray-100 rounded-2xl my-4">
                        <div className="heading py-8 text-center">
                            <h1 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>School Homework Sharing Website Using Python Django</h1>
                        </div>
                        <div className="para text-center">
                            <p className='text-gray-500'>School Homework Sharing Website Using Python Django</p>
                        </div>
                        <div className="moreButton flex py-4 flex-row items-center justify-center">
                            <button className="py-2 px-10 rounded-2xl bg-[#029e6e] text-white hover:bg-[#01573c]">View Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Work