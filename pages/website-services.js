import { React, useEffect } from 'react'
import Footer from '../components/Footer';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import BlogNavbar from '../components/blog/BlogNavbar'
import { AnimationOnScroll } from 'react-animation-on-scroll';
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                <link rel="icon" href="/yash.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/yash.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>Website Services - Atal Infotech</title>
            </Head>
            <div className="pagewrapper">
                <BlogNavbar></BlogNavbar>
                <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" className=" fixed h-[60px] w-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[38px] z-[100]" rel="noreferrer" target="_blank">
                    <i class="fa fa-whatsapp my-float"></i>
                </a>
            </div>
            <div className="box py-[2rem] md:grid md:grid-cols-2 md:gap-4 bg-gradient-to-r from-blue-800 to-blue-500 w-full md:grid md:grid-cols-2 md:gap-4">
                <div className="content px-2">
                    <div className="heading px-2 text-white text-[2rem] pt-4 pb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}><h1>Fully Functional and<span className="relative text-red-500" style={{ fontWeight: 700 }}> Responsive</span> Websites</h1></div>
                    <h2 className='text-white text-[1.5rem] px-2' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>making your business online...</h2>
                    <p className='px-2 py-8 text-white text-lg' style={{ fontFamily: "Raleway, sans-serif" }}>Having a fast and responsive website is must for every business. It plays a votal role in building brand trust of your customers. Our expert team can build you a fully functional and fast website for your business.
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
                    <p className='px-2 text-gray-700 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Website is a essential part of every big or medium scale business. A website gives a proof of legitmacy of your business.
                    It is also responsible in giving first impressions of your business to your clients. It builds your brand image and increases trust among your audience. It will help your business building online presence and extending your boundaries worldwide.
                    </p>


                    <div className="content2 px-2">
                        <h2 className='text-gray-700 text-[1.5rem] px-2 py-8' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}><span className='text-red-500'>Our Website </span>Services</h2>
                        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} duration={0.5}>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/website.png" height={100} width={100} alt="website_design"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Website Design</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>When it comes to your website then modern and user friendly design is on the top. Our team of professional web designers will help you to have a stunning web design with easy to use user interfaces.</p>
                            </div>
                        </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} duration={0.5}>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Blog Website</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Blog websites are the most high demanding websites in current date. Blog is a very convinient way of information gathering. Our website developers can develop you a fast and stylish blog website with all modern features. We use dark and easy to read fonts in all our blog websites which makes it very easy for the reader to read and understand the text.</p>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/blog-website.png" height={100} width={100} alt="blog-website"></Image>
                            </div>
                        </div>
                        </AnimationOnScroll>
                        
                        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} duration={0.5}>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/ecommerce.png" height={100} width={100} alt="ecommerce"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>E-Commerce Solutions</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Online shopping is a trend nowadays. Online E Commerce website is a great idea of extending your local store&apos;s range and getting more potential customers. Our E-Commerce solutions will help you to launch your products to all over the globe.</p>
                            </div>
                        </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} duration={0.5}>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Business Portfolio</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>Business portfolio website is a good way of letting your customers know about your business and services you are offering to them. It plays a great role building up your brand trust. We provide all kinds of business portfolio services in a very great price range.</p>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/portfolio.png" height={100} width={100} alt="portfolio"></Image>
                            </div>
                        </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} duration={0.5}>
                        <div className="seo grid grid-cols-3 gap-4 my-4 py-4 mx-2 rounded-2xl shadow-md shadow-gray-800 bg-gray-100 px-2 py-4">
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <Image src="/website/custom.png" height={100} width={100} alt="custom"></Image>
                            </div>
                            <div className='col-span-2'>
                                <h2 className='text-gray-700 text-[1.5rem] px-2' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>Customized Websites</h2>
                                <p className='px-2 text-gray-800 py-4' style={{ fontFamily: "Raleway, sans-serif" }}>In addition to websites listed above we also deal in coding customized websites to our clients. We support all modern frameworks like Djago, Node.js, React.js, Next.js, Mongo DB etc. We are leading MERN website developers in Mohali. Our customized website solutions will help you automate your business work and making complex tasks easy.</p>
                            </div>
                        </div>
                        </AnimationOnScroll>
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
                    <div className='my-4 py-4 px-2 bg-gradient-to-l from-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5] rounded'>
                        <div className="heading">
                            <h2 className='text-white text-[1.5rem] font-[600]' style={{ fontFamily: "Poppins, sans-serif" }}>Follow Us On Instagram</h2>
                        </div>
                        <a href="https://www.instagram.com/atalinfotech" target={'__blank'} rel="noreferrer"><h2 className='text-white cursor-pointer hover:text-blue-400 transition-all duration-100 font-[500] font-[Quicksand] text-[1rem]' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>www.instagram.com/atalinfotech</h2></a>
                    </div>
                    <div className='my-4 py-4 px-2 bg-gradient-to-l from-blue-600 via-blue-700  to-blue-800 rounded'>
                        <div className="heading">
                            <h2 className='text-white text-[1.5rem] font-[600]' style={{ fontFamily: "Poppins, sans-serif" }}>Checkout Our Facebook Page</h2>
                        </div>
                        <a href="https://www.facebook.com/atalinfotech19" target={'__blank'} rel="noreferrer"><h2 className='text-white cursor-pointer hover:text-blue-400 transition-all duration-100 font-[500] font-[Quicksand] text-[1rem]' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>www.facebook.com/atalinfotech19</h2></a>
                    </div>
                    <div className='my-4 py-4 px-2 bg-gradient-to-l from-green-600 via-green-700  to-green-800 rounded'>
                        <div className="heading">
                            <h2 className='text-white text-[1.5rem] font-[600]' style={{ fontFamily: "Poppins, sans-serif" }}>Quick Chat on Whattsapp</h2>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" target={'__blank'} rel="noreferrer"><h2 className='text-white cursor-pointer hover:text-blue-400 transition-all duration-100 font-[500] font-[Quicksand] text-[1rem]' style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 700 }}>Click here to chat</h2></a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Website