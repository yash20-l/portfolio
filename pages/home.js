import React, { useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Carousel from '../components/Carousel';
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillThunderbolt, AiFillCheckCircle } from 'react-icons/ai'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Home = () => {

    const HideShowContent = (id) => {
        document.getElementById(id).classList.toggle('hidden')
    }

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
        <div className="homewrapper">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>Atal Infotech | Digital Marketing | Website Development | SEO | Graphic Designing | Content Marketing</title>
                <meta name="description" content="Atal Infotech is a digital marketing provider in mohali. We provide professional digital marketing services to boost your business." />
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
                    <Navbar></Navbar>
                </div>
                <Carousel></Carousel>
                <div className="heading py-4">
                    <h1 className="text-center py-4 text-[2rem]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                        Creative Solutions to <span className="text-red-600" style={{ fontWeight: 700 }}>Digital </span>Challanges
                    </h1>
                </div>
                <div className="hero-para px-4">
                    <p className='text-center text-gray-800 w-full text-[16px] overflow-hidden' style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Atal Infotech is a IT and digital marketing company which provides digital marketing services. We all know that digital marketing is a proven
                        way to expand a company no matter the company is big or small. Digital Marketing has been an integral part of strategic marketing campaigns.
                        Since digital marketing is a very vast field therefore it takes significant experiance and efforts to run a efficient compaign. Internet is the
                        only medium by which you can reach vast number of consumers bayond the borders of your country. Today in this modern world, there is tough compitation
                        in every field. Our company helps your business to grow while taking care of your competitors.
                    </p>
                    <p className='text-center w-full text-gray-800 py-4 text-[16px]' style={{ fontFamily: 'Quicksand, sans-serif' }}>Our digital marketing stratigies helps you to reach
                        vast number of consumers in very short time period. Here at Atal Infotech we help your business grow so that you can help us grow. Our services gives a push to your business and enables it
                        to reach the global standards. Our SEO services ensures that you stay at top of the page.
                    </p>
                </div>
                <div className="services md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 bg-gray-200 px-[2rem] py-[5rem]">
                    <div className="servicebox my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/seo.png'} height={100} width={100}></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Search Engine Optimization</h2></div>
                        <p className='' style={{ fontFamily: 'Quicksand, sans-serif' }}>We plan the best campaigns for PPC Ads that will surely help you win loyal and potential customers with little efforts. Marketing Fundas is your one-stop destination for PPC service.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/digitalmarketing.png'} height={100} width={100}></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Digital Marketing</h2></div>
                        <p>We plan the best campaigns for PPC Ads that will surely help you win loyal and potential customers with little efforts. Marketing Fundas is your one-stop destination for PPC service.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/contentwriting.png'} height={100} width={100}></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Content Writing</h2></div>
                        <p>We plan the best campaigns for PPC Ads that will surely help you win loyal and potential customers with little efforts. Marketing Fundas is your one-stop destination for PPC service.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/webdesign.png'} height={100} width={100}></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Website Design</h2></div>
                        <p>We plan the best campaigns for PPC Ads that will surely help you win loyal and potential customers with little efforts. Marketing Fundas is your one-stop destination for PPC service.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/socialmediamarketing.png'} height={100} width={100}></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Social Media Optimization</h2></div>
                        <p>We plan the best campaigns for PPC Ads that will surely help you win loyal and potential customers with little efforts. Marketing Fundas is your one-stop destination for PPC service.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/ecommerce.png'} height={100} width={100}></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>E Commerce Solutions</h2></div>
                        <p>We plan the best campaigns for PPC Ads that will surely help you win loyal and potential customers with little efforts. Marketing Fundas is your one-stop destination for PPC service.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                </div>
                <div className="faq-section relative bg-[#040d23] py-[4rem] before:content-[''] before:absolute before:bg-[url('/utils/dots.png')] before:left-[-52px] before:top-0 before:w-[345px] before:h-[200px]">
                    <div className="heading">
                        <h2 className="text-center text-[2rem] text-white z-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Works Transforms Businesses.</h2>
                    </div>
                    <div className='bg-white pt-[2rem] px-[1rem] pb-[1rem] mx-[1rem] mt-[2rem] rounded-xl'>
                        <div className="md:grid md:grid-cols-2 md:gap-4">
                            <div className="faq-section">
                                <div className="faq-box border-2 my-[2rem] border-blue-300">
                                    <button className='w-full text-left px-2 py-2 bg-blue-600 text-white outline-none' style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }} onClick={() => { HideShowContent('faq1') }}>WHAT IS DIGITAL MARKETING ?</button>
                                    <div className="hidden content text-left text-black px-2 pt-4 pb-2 rounded-xl" id='faq1'>
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>Digital marketing, also called online marketing, is used to connect with customers by means of internet. As in today's world internet is a important part of our lives, Digital marketing is a proven way to target your audience around the globe. We tend to deliver best digital marketing services at minimum costs.</p>
                                    </div>
                                </div>
                                <div className="faq-box border-2 my-[2rem] border-blue-300">
                                    <button className='w-full text-left px-2 py-2 bg-blue-600 text-white outline-none' style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }} onClick={() => { HideShowContent('faq2') }}>HOW DIGITAL MARKETING WORKS ?</button>
                                    <div id='faq2' className="hidden content text-left text-black px-2 pt-4 pb-2 rounded-xl">
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>Digital marketing are several stragies which works togeather to generate traffic and find potential and loyal customers for a business. The main goal of digital marketing is to generate organic audience through internet. </p>
                                    </div>
                                </div>
                                <div className="faq-box border-2 my-[2rem] border-blue-300">
                                    <button className='w-full text-left px-2 py-2 bg-blue-600 text-white outline-none' style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }} onClick={() => { HideShowContent('faq3') }}>WHAT ARE SEO SERVICES ?</button>
                                    <div id='faq3' className="hidden content text-left text-black px-2 pt-4 pb-2 rounded-xl">
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>SEO or Search Engine Optiimization is a technique to optimize your website to be able to appear in search results. Think of that you are thinking of buying something online then the first thing you would do will search that on Google or any other search engine and here comes the role of SEO. If your website's SEO is good then your site may appear in the search results and the consumer would buy something from your site.</p>
                                    </div>
                                </div>
                                <div className="faq-box border-2 my-[2rem] border-blue-300">
                                    <button className='w-full text-left px-2 py-2 bg-blue-600 text-white outline-none' style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }} onClick={() => { HideShowContent('faq4') }}>WHAT A DIGITAL MARKETING AGENCY DO ?</button>
                                    <div id='faq4' className="hidden content text-left text-black px-2 pt-4 pb-2 rounded-xl">
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>The main motive of a digital marketing agency is to take your brand online i.e improving your brand's online presence to generate more and more potential customers and hence boosting your business.</p>
                                    </div>
                                </div>
                                <div className="faq-box border-2 my-[2rem] border-blue-300">
                                    <button className='w-full text-left px-2 py-2 bg-blue-600 text-white outline-none' style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }} onClick={() => { HideShowContent('faq5') }}>WHY DIGITAL MARKETING IS IMPORTANT ?</button>
                                    <div id='faq5' className="hidden content text-left text-black px-2 pt-4 pb-2 rounded-xl">
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>According to survey data about 70% of the world uses internet that is about 4.9 billion people. Only in India there are more than 622 million active internet users. This is a golden opportunity for small amd medium scale businesses to grow and reach the audience from all around the globe. Digital marketing gives you the pathway to maintain your online presence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="illustration w-full h-[30vh] md:h-[50vh] lg:h-[60vh] relative">
                                <Image src={'/utils/faq-digi-marketing.jpg'} fill></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutsection bg-white">
                    <div className="heading py-4">
                        <h2 className='text-gray-600 text-[1.5rem] md:text-[2rem] text-center' style={{fontFamily:"Poppins, sans-serif", fontWeight:500}}>Why Choose <span className='text-red-500' style={{fontWeight:700}}>Atal Infotech </span>for SEO Services ?</h2>
                    </div>
                    <div className="para md:grid md:grid-cols-2 md:gap-4">
                        <p className='flex flex-col items-center justify-center text-gray-600 text-left py-4 px-4' style={{fontFamily:"Quicksand, sans-serif"}}>
                            SEO is set of stragies to optamize your site which search engines use to rank your website.
                            We have team of experianced and creative brains which always gives their best. With our SEO Services
                            , the chances of your page to appear on first page of Google increases. We use effective and up to date
                            methods for optimization of your site. SEO is usually a long and slow process. With our SEO services your 
                            site presence on the web will surely start increasing. Our experiance and skills will result in more potential 
                            audiance to your business. Our supreme motive is to provide most effective yet affordable search engine optimization 
                            services to our clients. Hire Attal Infotech for most reliable, affordable and effective search engine optimization 
                            services within your budget.
                        </p>
                        <div className="image h-[50vh] md:h-[60vh] lg:h-[80vh] w-full relative">
                            <Image src={'/utils/seo.jpg'} fill></Image>
                        </div>
                    </div>
                </div>
                <div className="contactus bg-blend-multiply bg-gray-500 py-4  w-full" style={{backgroundImage:"url('/laptop.jpg')", backgroundRepeat:'no-repeat'}}>
                    <h2 className="text-left text-white text-[2.5rem] px-4" style={{fontFamily:"Raleway, sans-serif", fontWeight:700}}>Get into <span className='text-red-500'>touch</span></h2>
                    <div className="form px-4 py-8 md:grid md:grid-cols-2 md:gap-4">
                        <div className="part1">
                        <input type="text" className='py-2 mb-4 px-4 bg-white w-full outline-none text-gray-800' placeholder='Your Name' style={{fontFamily:"Poppins, sans-serif"}}/>
                        <input type="text" className='py-2 mb-4 px-4 bg-white w-full outline-none text-gray-800' placeholder='Your Phone Number' style={{fontFamily:"Poppins, sans-serif"}}/>
                        <input type="email" className='py-2 mb-4 px-4 bg-white w-full outline-none text-gray-800' placeholder='Your Email Address' style={{fontFamily:"Poppins, sans-serif"}}/>
                        
                        </div>
                        <textarea rows={6} className='py-2 mb-4 px-4 bg-white w-full outline-none text-gray-800 h-full w-full' placeholder='Describe about your project' style={{fontFamily:"Poppins, sans-serif"}}/>
                    </div>
                    <div className="btn">
                        <button className='bg-red-500 rounded mx-4 px-4 py-2 text-white text-lg hover:bg-red-600' style={{fontFamily:"Poppins, sans-serif"}}>Submit</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}


export default Home