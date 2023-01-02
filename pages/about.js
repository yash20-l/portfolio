import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
            <Navbar active={2}></Navbar>
            <div className="wrapper bg-[#2e2e2e] h-full px-[2rem] px-4 py-[2rem]">
                <div className="text py-4  flex flex-row items-center">
                    <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
                    <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>About Us</h1>
                </div>
                <div className="subText">
                    <h1 className='text-[#00d69a] text-2xl text-center'>Who we are ?</h1>
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