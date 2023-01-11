import React, { useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/Carousel';
import Footer from "../components/Footer";
import Header from '../components/Header';


const Index = () => {

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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                <link rel="favicon" href="/yash.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>Atal Infotech | Digital Marketing | Website Development | SEO | Graphic Designing | Content Marketing</title>
                <meta name="description" content="Atal Infotech is a digital marketing provider in mohali. We provide professional digital marketing services to boost your business and helps generating organic traffic." />
            </Head>

            <div className="pagewrapper">
                <Header page={0}></Header>
                <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" className=" fixed h-[60px] w-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[38px] z-[100]" rel="noreferrer" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
                <Carousel></Carousel>
                <div className="heading py-4">
                    <h1 className="text-center py-4 text-[2rem]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                        Creative Solutions to <span className="text-red-600" style={{ fontWeight: 700 }}>Digital </span>Challanges
                    </h1>
                </div>
                <div className="hero-para px-4">
                    <p className='text-center text-gray-800 w-full text-[16px] overflow-hidden' style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Atal Infotech is a IT and digital marketing company which provides digital marketing services. Digital marketing is a proven and efficient
                        way to gain more loyal customers online. Digital Marketing has been an integral part of strategic marketing campaigns.
                        Since digital marketing is a very vast field therefore it takes significant experience and efforts to run a efficient compaign. By using digital marketing strategies you can reach
                        more potential consumers from all over the globe. 
                    </p>
                    <p className='text-center w-full text-gray-800 py-4 text-[16px]' style={{ fontFamily: 'Quicksand, sans-serif' }}>Our digital marketing stratigies helps you to reach
                        vast number of consumers in very short time period. Here at Atal Infotech we help your business grow so that you can help us grow. Our services gives a push to your business and enables it
                        to reach the global standards. Our SEO services ensures that you stay at top of the page.
                    </p>
                </div>
                <div className="services md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 bg-gray-100 px-[2rem] py-[5rem]">
                    <div className="servicebox shadow-md shadow-gray-700  ease-in duration-200 hover:shadow-blue-500 hover:shadow-lg my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/seo.png'} height={100} width={100} alt="seo_image"></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Search Engine Optimization</h2></div>
                        <p  style={{ fontFamily: 'Quicksand, sans-serif' }}>We use the best and most effecient search engine optimization strategies for ranking your website. We are the leading SEO provider in Mohali. Appearing in top of the search results is a complex and time taking process but once done it gives tons of potential and loyal customers and the effect is long lasting.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox shadow-md shadow-gray-700  ease-in duration-200 hover:shadow-blue-500 hover:shadow-lg my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/digitalmarketing.png'} height={100} width={100} alt="digitalmarketing"></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Digital Marketing</h2></div>
                        <p style={{ fontFamily: 'Quicksand, sans-serif' }}>Digital marketing are the set of strategies used to promote your brand through online medium. We provide all kinds of digital marketing services in mohali. Digital marketing is the best and most efficient way of generating organic traffic through internet.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox shadow-md shadow-gray-700  ease-in duration-200 hover:shadow-blue-500 hover:shadow-lg my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/contentwriting.png'} height={100} width={100} alt="contentwriting"></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Content Writing</h2></div>
                        <p style={{ fontFamily: 'Quicksand, sans-serif' }}>Weather it is digital marketing or it&apos;s your personal blog website it all requires quality and eye catching content to grab the audience attention. We have a team of experienced and creative brains which will provide you the most optimized and quality content to boost your business.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox shadow-md shadow-gray-700  ease-in duration-200 hover:shadow-blue-500 hover:shadow-lg my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/webdesign1.png'} height={100} width={100} alt="webdesign"></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Website Design</h2></div>
                        <p style={{ fontFamily: 'Quicksand, sans-serif' }}>Modern websites needs modern user interface for it&apos;s users that&apos;s why we are here to help you. All our website designs are fully responsive and easy to use. clear text, easy navigation, smooth transitions and quality design are some of the features of the websites developed by our professional web developers.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox shadow-md shadow-gray-700  ease-in duration-200 hover:shadow-blue-500 hover:shadow-lg my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/services/socialmediamarketing.png'} height={100} width={100} alt="socialmediamarketing"></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Social Media Optimization</h2></div>
                        <p style={{ fontFamily: 'Quicksand, sans-serif' }}>Today everyone does&apos;nt matter which age group they belong to, spents some time on social media and here comes the role of social media optimization. Optimizing your social media accounts gives you a golden oppurtunity to gain organic traffic. We provide social media optimizations in great price range.</p>
                        <a href="#"><p className='my-2 text-red-700'>read more...</p></a>
                    </div>
                    <div className="servicebox shadow-md shadow-gray-700  ease-in duration-200 hover:shadow-blue-500 hover:shadow-lg my-4 p-4 cursor-pointer rounded-xl bg-white rounded-xl py-[2rem]">
                        <div className="image">
                            <Image src={'/website/ecommerce.png'} height={100} width={100} alt="ecommerce"></Image>
                        </div>
                        <div className="text py-2"><h2 className='text-xl text-red-600 text-left' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>E Commerce Solutions</h2></div>
                        <p style={{ fontFamily: 'Quicksand, sans-serif' }}>E-Commerce websites gives you a pathway to extend your local shop product&apos;s range and gain more loyal and potential customers. We provide the best and most cost efficient e-commerce solutions to our clients. Easy payments, Fully responsive, Authentication and authorization, In store carts, etc are some features of e-commerce websites developed by us.</p>
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
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>Digital marketing, also called online marketing, is used to connect with new potential customers by means of internet. As in today&apos;s world, the internet is an important part of our lives, Digital marketing is a proven way to target your audience around the globe. We tend to deliver best digital marketing services at minimum costs.</p>
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
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>Just creating a website on web is not enough but you need to optimize it so that it can we showed in search results when someone searches a relivant keyword. Strategies used for optimizing a website is known as SEO. In order to generate more traffic to your site SEO is an imporant step. Atal Infotech is a leading SEO provider company in Mohali. we provide the best and most efficient SEO services to our clients.</p>
                                    </div>
                                </div>
                                <div className="faq-box border-2 my-[2rem] border-blue-300">
                                    <button className='w-full text-left px-2 py-2 bg-blue-600 text-white outline-none' style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }} onClick={() => { HideShowContent('faq4') }}>WHAT A DIGITAL MARKETING AGENCY DO ?</button>
                                    <div id='faq4' className="hidden content text-left text-black px-2 pt-4 pb-2 rounded-xl">
                                        <p className='text-gray-600' style={{ fontFamily: "Quicksand, sans-serif" }}>The main task of a digital marketing agency is to take your brand online i.e improving your brand&apos;s online presence to generate more and more potential customers and building your brand name.</p>
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
                                <Image src={'/utils/faq-digi-marketing.jpg'} fill alt='faq-digi-marketing'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutsection bg-white">
                    <div className="heading pt-[2rem]">
                        <h2 className='text-gray-600 text-[1.5rem] md:text-[2rem] text-center' style={{fontFamily:"Poppins, sans-serif", fontWeight:500}}>Why Choose <span className='text-red-500' style={{fontWeight:700}}>Atal Infotech </span>for SEO Services ?</h2>
                    </div>
                    <div className="para md:grid md:grid-cols-2 md:gap-4">
                        <p className='flex flex-col items-center justify-center text-gray-600 text-left py-4 px-4' style={{fontFamily:"Quicksand, sans-serif"}}>
                            SEO is set of strategies to optimize your website which search engines use to rank your website.
                            We have team of experienced and creative brains which always gives their best. With our SEO Services
                            , the chances of your page to appear on first page of Google increases. We use effective and up to date
                            methods for optimization of your site. SEO is usually a long and slow process. With our SEO services your 
                            site presence on the web will surely start increasing. Our experience and skills will result in more potential 
                            audiance to your business. Our supreme motive is to provide most effective yet affordable search engine optimization 
                            services to our clients. Hire Attal Infotech for most reliable, affordable and effective search engine optimization 
                            services within your budget.
                        </p>
                        <div className="image h-[50vh] md:h-[60vh] lg:h-[80vh] w-full relative">
                            <Image src={'/utils/seo.jpg'} fill alt='seo_image'></Image>
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


export default Index