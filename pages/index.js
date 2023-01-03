import Head from 'next/head'
import { useCallback } from "react";
import Navbar from '../components/Navbar'
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Image from 'next/image';
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillThunderbolt, AiFillCheckCircle } from 'react-icons/ai'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Footer from '../components/Footer';
import { FaLightbulb, FaRegPaperPlane } from "react-icons/fa"
import Script from 'next/script';

export default function Home() {


  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className='main'>
      <Head>
        <meta name='keywords' content="digital marketing, website design, website services, ui/ux design, graphic designing, professional digital marketing services, digital marketing services in chandigarh, digital marketing services in mohali, digital marketing services in ropar, best digital marketing services" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <title>Atal Infotech | Web Development | Digital Marketing| SEO</title>
        <meta name="description" content="Best digital marketing services, website services, website design, email marketing and many more at excellent prices." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
      </Head>

      <Navbar active={0}></Navbar>

      <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" className=" fixed h-[60px] w-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[38px] z-[100]" target="_blank" rel="noreferrer">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></Script>

      <div className="heroSection relative" style={{ minHeight: '90vh' }}>
        <Particles
          className='h-full absolute top-0 left-0 h-full w-full'
          id="tsparticles"

          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#040d23",
              },
            },
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00d69a",
              },
              links: {
                color: "#00d69a",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 5,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}

        />
        <div className="content flex flex-col-reverse  md:flex-row absolute items-center justify-center h-full w-full md:px-[5rem] lg:px-[10rem]">
          <div className="hero-text flex items-center justify-center flex-col mx-4 lg:mx-[10vh] h-full w-full" >
            <div className="content-subwrapper text-center">
              <h1 className="text-[2.2rem]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: 'white' }}>Creative solutions to digital challenges</h1>
              <div className="button py-8">
                <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" target={'_blank'} rel='noreferrer'><button className='px-8 py-2 bg-transparent border-2 border-[#00d69a] text-white text-lg hover:border-[#008549]' style={{ fontFamily: 'Quicksand, sans-serif' }}>GET STARTED</button></a>
              </div>
              <div className="social-icons flex flex-row items-center justify-center py-2">
                <AiFillGithub size={30} color='white' className='mx-[5px] hover:cursor-pointer'></AiFillGithub>
                <AiFillInstagram size={30} color='white' className='mx-[5px] hover:cursor-pointer'></AiFillInstagram>
                <AiFillTwitterCircle size={30} color='white' className='mx-[5px] hover:cursor-pointer'></AiFillTwitterCircle>
                <AiFillFacebook size={30} color='white' className='mx-[5px] hover:cursor-pointer'></AiFillFacebook>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dialogeSection flex flex-col-reverse py-[5rem] h-[40rem] md:h-[25rem] md:flex-row items-center justify-center px-8" style={{ background: '#1b0f42' }}>
        <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1.1} animateOnce={true}>
          <div className="text md:py-2 flex flex-row items-center justify-center h-full w-full">
            <h2 className='text-[2.5rem] lg:text-[2.5rem] text-white' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Web Solutions to Scale Your Business.</h2>
          </div>
          <div className="subheading">
            <span className='text-white text-lg' style={{ fontFamily: 'Quicksand, sans-serif' }}>From simple web page to complex realtime projects, We are with you</span>
          </div>
        </AnimationOnScroll>

        <div className="dialougeImage  h-full w-full relative flex flex-row items-center justify-center">
          <Image src={'/dialouge.svg'} fill alt='enjoy-lady'></Image>
        </div>
      </div>

      <div className="ServicesSection px-4 overflow-hidden lg:px-8" style={{ background: '#2e2e2e' }}>
        <div className="text py-4 h-full w-full flex flex-row items-center">
          <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
          <h2 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Services</h2>
        </div>
        <div className="boxSection lg:grid lg:grid-cols-3 lg:gap-4 lg:px-16 py-4">
          <div className="box1 p-4 bg-white rounded-2xl my-4">
            <div className="boxImage relative h-[12rem] w-full">
              <Image src={'/design.svg'} fill alt='services3'></Image>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={0.5} animateOnce={true}>
              <div className="heading py-8 text-center">
                <h2 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>UI/UX Design</h2>
              </div>
            </AnimationOnScroll>
            <div className="para text-left pb-4">
              <p className='text-gray-500'>Modern websites need modern user interface for your visiters</p>
            </div>
            <div className="more-section h-[10rem] py-2">
              <div className="more w-full h-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Website Design</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Content Writing</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Modern</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>User Friendly</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Fully Responsive</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box2 p-4 bg-white rounded-2xl my-4 border-4 border-[#00d69a]">
            <div className="boxImage relative h-[12rem] w-full">
              <Image src={'/backend.svg'} fill alt='services1'></Image>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5} animateOnce={true}>
              <div className="heading py-8 text-center">
                <h2 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Website Services</h2>
              </div>
            </AnimationOnScroll>
            <div className="para text-left pb-4">
              <p className='text-gray-500'>Fully responsive, Fast loading, Simple and User friendly</p>
            </div>
            <div className="more-section h-[10rem] py-2">
              <div className="more w-full h-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Business Portfolio</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Static Website</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Dynamic Website</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Single Page Website</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Ecommerce Website</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box3 p-4 bg-white rounded-2xl my-4">
            <div className="boxImage relative h-[12rem] w-full">
              <Image src={'/digital.svg'} fill alt='services2'></Image>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInRight" duration={0.5} animateOnce={true}>
              <div className="heading py-8 text-center">
                <h2 className='text-2xl text-[#007d5a]' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Digital Marketing</h2>
              </div>
            </AnimationOnScroll>
            <div className="para text-left pb-4">
              <p className='text-gray-500'>Digital marketing that give a boost to your Business or content</p>
            </div>
            <div className="more-section h-[10rem] py-2">
              <div className="more w-full h-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Email Marketing</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Google Ads</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Facebook Ads</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>SEO Services</h2>
                  </div>
                </div>
                <div className="more-item flex flex-row items-center justify-start">
                  <div className="tickmark px-2">
                    <AiFillCheckCircle size={20} color="#11b502"></AiFillCheckCircle>
                  </div>
                  <div className="more-text px-2">
                    <h2 className='text-lg'>Social Media</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="moreButton flex py-4 flex-row items-center justify-center">
              <button className="py-2 px-10 rounded-2xl bg-[#029e6e] text-white hover:bg-[#01573c]">MORE</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="ServicesSection px-4 overflow-hidden lg:px-8" style={{ background: '#2e2e2e' }}>
        <div className="text py-4 h-full w-full flex flex-row items-center">
          <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
          <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Services</h1>
        </div>
      </div> */}

      <div className="creativesection bg-blend-multiply bg-gray-600" style={{ backgroundImage: "url('/laptop2.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="text text-center pt-2">
          <h1 className='text-2xl text-white'>Our Mission</h1>
        </div>
        <div className="mainText text-center">
          <h2 className="text-[2rem] lg:text-[3rem] text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Our work transforms businesses
          </h2>
        </div>
        <div className="boxxeswrapper py-[4rem] md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-[10rem]">
          <div className="box1 my-4 mx-8 lg:m-[0]  bg-gray-800 rounded-2xl border-2 border-[#00d69a]">
            <div className="image py-[2rem] px-[3rem]">
              <FaLightbulb size={50} color={'#00d69a'}></FaLightbulb>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5} animateOnce={true}>
              <div className="text px-[2rem] pb-[2rem]">
                <h2 className='text-[2.5rem] text-white' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Creative</h2>
              </div>
            </AnimationOnScroll>
            <div className="para px-[2rem] pb-8">
              <h2 className="text-lg text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>Our team is full of creative thoughts and we always tend to do something new.</h2>
            </div>
          </div>
          <div className="box1 my-4 mx-8 lg:m-[0]  bg-gray-800 rounded-2xl border-2 border-[#00d69a]">
            <div className="image py-[2rem] px-[3rem]">
              <AiFillThunderbolt size={50} color={'#00d69a'}></AiFillThunderbolt>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5} animateOnce={true}>
              <div className="text px-[2rem] pb-[2rem]">
                <h2 className='text-[2.5rem] text-white' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Commited</h2>
              </div>
            </AnimationOnScroll>
            <div className="para px-[2rem] pb-8">
              <h2 className="text-lg text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>Our commited thoughts are the reason behind the growth to several new businesses.</h2>
            </div>
          </div>
          <div className="box1 my-4 mx-8 lg:m-[0]  bg-gray-800 rounded-2xl border-2 border-[#00d69a]">
            <div className="image py-[2rem] px-[3rem]">
              <FaRegPaperPlane size={50} color={'#00d69a'}></FaRegPaperPlane>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5} animateOnce={true}>
              <div className="text px-[2rem] pb-[2rem]">
                <h2 className='text-[2.5rem] text-white' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Curious</h2>
              </div>
            </AnimationOnScroll>
            <div className="para px-[2rem] pb-8">
              <h2 className="text-lg text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>We are always curious to try new technologies and provide our clients with up to date services</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutSection relative overflow-hidden px-4 lg:px-8" style={{ background: '#000000' }}>
        <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1} animateOnce={true}>
          <div className="text py-4 h-full w-full flex flex-row items-center">
            <div className="dash w-[4rem] rounded-xl h-[5px] bg-[#00d69a] mx-4"></div>
            <h1 className="text-[2.5rem] text-left lg:text-[3rem] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>About</h1>
          </div>
        </AnimationOnScroll>
        <div className="innerWrapper lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="paraText py-4 flex flex-col align-center justify-center relative">
            <AnimationOnScroll animateIn="animate__fadeInRight" duration={1} animateOnce={true}>
              <span className='text-white text-lg' style={{ fontFamily: 'Quicksand, sans-serif' }}>Atal Infotech is a digital marketing company which provides IT and Digital Marketing services. We tend to provide best services to our clients in a excellent price. Our commited and creative thoughts never let us down. Our vision is to provide premium and quality services to our clients to boost their business.</span>
            </AnimationOnScroll>
          </div>
          <div className="image relative h-[25rem] w-full">
            <Image src={'/stepup.svg'} fill alt='stepup'></Image>
          </div>
        </div>
      </div>

      <div className="questionSection flex flex-col items-center justify-center h-[80vh] bg-blend-multiply bg-gray-500" style={{ backgroundImage: "url('/laptop.jpg')" }}>
        <div className="social-icons py-4 flex flex-row items-center justify-center">
          <div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
            <AiFillFacebook color='#ffffff' size={30}></AiFillFacebook>
          </div>
          <div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
            <AiFillInstagram color='#ffffff' size={30}></AiFillInstagram>
          </div>
          <div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
            <AiFillGithub color='#ffffff' size={30}></AiFillGithub>
          </div>
          <div className="icon p-2 mx-2 rounded-full bg-transparent border-2 cursor-pointer border-[#00d69a] hover:border-[#008549]">
            <AiFillTwitterCircle color='#ffffff' size={30}></AiFillTwitterCircle>
          </div>
        </div>
        <div className="heading">
          <h2 className="text-[3rem] text-white text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}>Have any projects in mind ?</h2>
        </div>
        <div className="button py-8">
          <a href="https://api.whatsapp.com/send?phone=+919115479004&text=Hi,%20I%20have%20some%20query" target={'_blank'} rel='noreferrer'><button className='px-8 py-2 bg-transparent border-2 border-[#00d69a] text-white text-lg hover:border-[#008549]' style={{ fontFamily: 'Quicksand, sans-serif' }}>GET STARTED</button></a>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}
