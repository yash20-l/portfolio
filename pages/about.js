import Head from 'next/head'
import React from 'react'
import BlogNavbar from '../components/blog/BlogNavbar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
        <Head>
            <title>About Us | Atal Infotech</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        </Head>
            <BlogNavbar></BlogNavbar>
            <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" className=" fixed h-[60px] w-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[38px] z-[100]" target="_blank" rel="noreferrer">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
            <div className="wrapper py-[2rem] bg-[#2e2e2e] h-full px-[2rem] px-4 py-[2rem]">
                <div className="text py-4  flex flex-row items-center">
                    <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
                    <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>About Us</h1>
                </div>
                <div className="subText">
                    <h2 className='text-[#00d69a] text-2xl text-center'>Who we are ?</h2>
                </div>
                <div className="para py-4">
                    <span className='text-white'>Atal Infotech is a tech company. We provide several tech and non-tech services to our clients. We build softwares to solve problems. We help our clients grow so that they can help us grow. We are a team of experianced and creative freelancers which never let us down. We provide out clients with the best services at a minimal cost. We have got several satisfied customers from all over the globe.</span>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About