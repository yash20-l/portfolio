import Head from 'next/head'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillThunderbolt, AiFillCheckCircle } from 'react-icons/ai'
import Image from 'next/image'
const DigitalMarketing = () => {

    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > 0) {
                window.document.getElementById('headers').classList.remove('static')
                window.document.getElementById('headers').classList.add('fixed')
            }
            else {
                window.document.getElementById('headers').classList.add('static')
                window.document.getElementById('headers').classList.remove('fixed')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="mainWrapper">
            <Head>
                <link rel="favicon" href="/yash.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>Digital Marketing Services</title>
            </Head>
            <div className="pagewrapper">
                <div className="headers z-[2] w-full top-0 static" id='headers'>
                    <div className="strip px-4 h-auto bg-blue-600 py-[.5rem] flex flex-row items-center justify-between">
                        <div className="social-media flex flex-row items-center justify-center">
                            <span className='text-white pz-2'>Follow Us:</span>
                            <div className="icons px-2 flex flex-row items-center justify-center">
                                <a href="#"><AiFillInstagram size={20} color="white" className='mx-2'></AiFillInstagram></a>
                                <a href="#"><AiFillTwitterCircle size={20} color="white" className='mx-2'></AiFillTwitterCircle></a>
                                <a href="#"><AiFillFacebook size={20} color="white" className='mx-2'></AiFillFacebook></a>
                            </div>
                        </div>
                        <div className="contactinfo flex flex-row items-center justify-center hidden md:block">
                            <span className='text-white px-2'>atalinfotech19@gmail.com</span>
                            <span className='text-white px-2'>+91 9115479004</span>
                        </div>
                    </div>
                    <Navbar active={1}></Navbar>
                </div>
            </div>
            <div className="box md:grid md:grid-cols-2 md:gap-4 bg-gradient-to-r to-cyan-500 from-blue-500 w-full md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <div className="content px-2">
                        <div className="heading px-2 text-white text-[2rem] pt-4 pb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}><h1>Professional Digital <span className='text-red-500' style={{ fontWeight: 700 }}>Marketing</span> Solutions</h1></div>
                        <h2 className='text-white text-[1.5rem] px-2' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>Uplifting Your Business...</h2>
                        <p className='px-2 py-8 text-white text-lg' style={{ fontFamily: "Raleway, sans-serif" }}>Experiance the growth of your business with our expert digital marketing solutions. Atal Infotech is a leading digital marketing company in Mohali.
                            Our professional works and creative ideas will boost your business like a BOOM !
                        </p>
                    </div>
                </div>
                <div className="image flex flex-col items-center py-4 justify-center">
                    <div className="box rounded-full h-[18rem] w-[18rem] bg-white border-8 border-blue-400" style={{ background: "url('/social/social-market.jpg')", backgroundPosition: "center", backgroundSize: "16rem" }}>
                    </div>
                </div>

            </div>

            <div className="breadcrumb px-4 py-2">
                <span className='' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 500 }}>Home {'>'} Digital Marketing</span>
            </div>

            <div className="content2 py-4 px-2 md:grid md:grid-cols-3 md:gap-4">
                <div className='md:col-span-2'>
                    <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>Improve Your <span className='text-red-500'>Online</span> Presence</h2>
                    <p className='px-2 text-gray-700 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>With our expert digital marketing services you will see a gradual increase in your online presence.
                        Our main goal is making a making your business more accessible online so that you get maximum customers. Our qualified experts
                        work very hard and always try to give their best. We can use are skills and experience to grow your business so that you can help us grow.
                        Digital marketing services of almost every budget are available. Our services and relaible, effective and pocket friendly.
                    </p>
                    <div className="content2 px-2">
                        <h2 className='text-gray-700 text-[1.5rem] px-2 py-8' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>Some <span className='text-red-500'>Digital Marketing </span>Services By Atal Infotech</h2>
                        <div className="seo my-4 grid grid-cols-3 gap-4 py-4 rounded-2xl bg-gray-100 px-2 py-4 shadow-md shadow-gray-500">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/services/seo.png" height={100} width={100} alt="seo"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem]' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Search <span className="relative before:content-[''] before:absolute before:bg-red-500 py-2 before:h-[4px] before:rounded-xl before:w-[4.5rem] before:bottom-0 before:left-[0px] relative">Engine </span>Optimization</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>SEO is a art of appearing in organic search results in any search engine. It is very effective and long lasting method of gaining popularity on web. We provide the best SEO services in Mohali. Our SEO services will surely get your page rankings up.</p>
                            </div>
                        </div>
                        <div className="seo my-4 grid grid-cols-3 gap-4 py-4  rounded-2xl shadow-md shadow-gray-500 bg-gray-100 px-2 py-4">
                            <div className='col-span-2'>
                                <h2 className="text-gray-700 text-[1.5rem] px-2 relative before:content-[''] before:absolute before:bg-red-500 py-2 before:h-[4px] before:rounded-xl before:w-[10rem] before:bottom-0 before:left-[5px]" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Content Writing</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Generating quality content is a very important step in any online compaign. Our creative and commited team members can do it for you.
                                    We will provide you the best content writing services. Professional and eye catching content is an essential part in SEO, social media optimization and any other marketing campaign.
                                </p>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/services/contentwriting.png" height={100} width={100} alt="contentwriting"></Image>
                            </div>
                        </div>
                        <div className="seo my-4 grid grid-cols-3 gap-4 py-4  rounded-2xl shadow-md shadow-gray-500 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/services/socialmediamarketing.png" height={100} width={100} alt="socialmediamarketing"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className="text-gray-700 text-[1.5rem] px-2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Social Media <span className="relative before:content-[''] before:absolute before:bg-red-500 before:h-[4px] before:rounded-xl before:w-[9.5rem] before:bottom-0 before:right-[0rem] py-2">Optimization</span></h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>When talking about digital marketing we can&apos;t forget social media because social media platforms like Youtube, Facebook, Instagram have
                                    millions of daily active users. Optimizing your social media accounts can help you reach tons of new customers everyday.</p>
                            </div>
                        </div>
                        <div className="seo my-4 grid grid-cols-3 gap-4 py-4 rounded-2xl shadow-md shadow-gray-500 bg-gray-100 px-2 py-4">
                            <div className='col-span-2'>
                                <h2 className="text-gray-700 text-[1.5rem] px-2 relative before:content-[''] before:absolute before:bg-red-500 py-2 before:h-[4px] before:rounded-xl before:w-[6rem] before:bottom-0 before:left-[5px]" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Graphic Designing</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Images capture attention of customers instantly as compared to plain text. We provide professional Graphic Designing services. We always try something new and creative to promote your brand. The perfect mix of all these digital marketing services will surely provide you positive results.
                                </p>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/services/paint.png" height={100} width={100} alt="paint"></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-4 px-2 bg-red-500 rounded-xl">
                        <div className="contact-form">
                            <h4 className="text-center py-2 text-white text-[1.5rem]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>LET&apos;S TALK</h4>
                            <div className="form px-4 py-8">
                                <div className="part1">
                                    <input type="text" className='py-2 mb-4 px-4 bg-white w-full outline-none text-white' placeholder='Your Name' style={{ fontFamily: "Poppins, sans-serif" }} />
                                    <input type="text" className='py-2 mb-4 px-4 bg-white w-full outline-none text-white' placeholder='Your Phone Number' style={{ fontFamily: "Poppins, sans-serif" }} />
                                    <input type="email" className='py-2 mb-4 px-4 bg-white w-full outline-none text-white' placeholder='Your Email Address' style={{ fontFamily: "Poppins, sans-serif" }} />

                                </div>
                            </div>
                            <div className="btn">
                                <button className='bg-white rounded mx-4 px-4 py-2 text-red-500 text-lg hover:bg-red-600 hover:text-white ease-in duration-100 hover:border-2 hover:border-white' style={{ fontFamily: "Poppins, sans-serif" }}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 py-4 px-2 bg-blue-600 rounded'>
                        <div className="heading">
                            <h2 className='text-white text-[2rem]' style={{ fontFamily: "Anton, sans-serif" }}>Ready to rank top ?</h2>
                        </div>
                        <h2 className='text-white text-[1.5rem]' style={{ fontFamily: "Quicksans, sans-serif", fontWeight: 700 }}>Contact now at <span>+91 9115479004</span></h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default DigitalMarketing