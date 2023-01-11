import { React, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillThunderbolt, AiFillCheckCircle } from 'react-icons/ai'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header';

const Website = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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
        <div className="mainWrapper">
            <Head>
                <link rel="favicon" href="/yash.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>Website Services</title>
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
                    <Navbar active={2}></Navbar>
                </div>
            </div>
            <div className="box md:grid md:grid-cols-2 md:gap-4 bg-gradient-to-r from-blue-800 to-blue-500 w-full md:grid md:grid-cols-2 md:gap-4">
                <div className="content px-2">
                    <div className="heading px-2 text-white text-[2rem] pt-4 pb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}><h1>Fully Functional and<span className="relative text-red-500" style={{ fontWeight: 700 }}> Responsive</span> Websites</h1></div>
                    <h2 className='text-white text-[1.5rem] px-2' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>making your business online...</h2>
                    <p className='px-2 py-8 text-white text-lg' style={{ fontFamily: "Raleway, sans-serif" }}>Website is very important for generating organic traffic from digital marketing. It plays a votal role in building brand trust of your customers. Our range of website will surely help you to make a fast and user friendly website.
                    </p>
                </div>
                <div className="image flex flex-col items-center py-4 justify-center">
                    <div className="box rounded-full h-[18rem] w-[18rem] bg-white border-8 border-blue-400" style={{ background: "url('/social/web.jpg')", backgroundPosition: "center", backgroundSize: "16rem" }}>
                    </div>
                </div>

            </div>

            <div className="breadcrumb px-4 py-2">
                <span className='' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 500 }}><Link href="/">Home</Link> {'>'} <Link href="/website-services">Website Services</Link></span>
            </div>

            <div className="content2 py-4 px-2 md:grid md:grid-cols-3 md:gap-4">
                <div className='md:col-span-2'>
                    <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>Why <span className='text-red-500'>Website</span> is Important ?</h2>
                    <p className='px-2 text-gray-700 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>With our expert digital marketing services you will see a gradual increase in your online presence.
                        Our main goal is making a making your business more accessible online so that you get maximum customers. Our qualified experts
                        work very hard and always try to give their best. We can use are skills and experience to grow your business so that you can help us grow.
                        Digital marketing services of almost every budget are available. Our services and relaible, effective and pocket friendly.
                    </p>


                    <div className="content2 px-2">
                        <h2 className='text-gray-700 text-[1.5rem] px-2 py-8' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}><span className='text-red-500'>Our Website </span>Services</h2>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/website.png" height={100} width={100} alt="website_design"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Website Design</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>When it comes to your website then modern and user friendly design is on the top. Our team of professional web designers will help you to have a stunning web design with easy to use user interfaces.</p>
                            </div>
                        </div>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Blog Website</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Blog websites are the most high demanding websites in current date. Blog is a very convinient way of information gathering. Our website developers can develop you a fast and stylish blog website with all modern features. We use dark and easy to read fonts in all our blog websites which makes it very easy for the reader to read and understand the text.</p>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/blog-website.png" height={100} width={100} alt="blog-website"></Image>
                            </div>
                        </div>

                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/ecommerce.png" height={100} width={100} alt="ecommerce"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>E-Commerce Solutions</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Online shopping is a trend nowadays. Online E Commerce website is a great idea of extending your local store&apos;s range and getting more potential customers. Our E-Commerce solutions will help you to launch your products to all over the globe.</p>
                            </div>
                        </div>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Business Portfolio</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Business portfolio website is a good way of letting your customers know about your business and services you are offering to them. It plays a great role building up your brand trust. We provide all kinds of business portfolio services in a very great price range.</p>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/portfolio.png" height={100} width={100} alt="portfolio"></Image>
                            </div>
                        </div>

                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/custom.png" height={100} width={100} alt="custom"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Customized Websites</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>In addition to websites listed above we also deal in coding customized websites to our clients. We support all modern frameworks like Djago, Node.js, React.js, Next.js, Mongo DB etc. We are leading MERN website developers in Mohali. Our customized website solutions will help you automate your business work and making complex tasks easy.</p>
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
                            <h2 className='text-white text-[2rem]' style={{ fontFamily: "Anton, sans-serif" }}>Need a fast website ?</h2>
                        </div>
                        <h2 className='text-white text-[1.5rem]' style={{ fontFamily: "Quicksans, sans-serif", fontWeight: 700 }}>Contact now at <span>+91 9115479004</span></h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Website