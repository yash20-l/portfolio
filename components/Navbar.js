import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import {AiFillCloseCircle} from "react-icons/ai"

const Navbar = (props) => {

  const [active, setActive] = useState(props.active)


  const handleOnClick = () => {
    document.getElementById('menu-options').classList.toggle('hidden')
    document.getElementById('closebtn').classList.toggle('hidden')
    document.getElementById('openbtn').classList.toggle('hidden')
  }


  return (
    <div className="navbar-wrapper bg-[#040d23] relative">
            <div id='menu-options' className="mobile-menu-options hidden transition ease-in-out duration-200 overflow-x-hidden left-0 z-[10] top-0 w-full h-full bg-gray-900 fixed text-white px-2 lg:hidden">
        <div className="options py-2 flex flex-col items-center justify-center h-full w-full">
          <div className="option-tile pl-4 py-2 flex flex-row items-center justify-start">
            <Link href='/'><span style={{fontFamily:'Poppins, sans-serif'}} className="text-[2rem]">Home</span></Link>
          </div>
          <div className="option-tile py-2 pl-4 flex flex-row items-center justify-start">
            <Link href={'/skills'}><span style={{fontFamily:'Poppins, sans-serif'}} className="text-[2rem]" >Skills</span></Link>
          </div>
          <div className="option-tile py-2 pl-4 flex flex-row items-center justify-start">
            <Link href={'/about'}><span style={{fontFamily:'Poppins, sans-serif'}} className="text-[2rem]">About</span></Link>
          </div>
          <div className="option-tile py-2 pl-4 flex flex-row items-center justify-start">
            <Link href={'/contact'}><span style={{fontFamily:'Poppins, sans-serif'}} className="text-[2rem]">Contact Us</span></Link>
          </div>
        </div>
      </div>
      <div className="mobile-menu flex flex-row bg-[#040d23] align-center justify-between px-2 lg:hidden">
        <div className="logowrapper flex flex-row items-center justify-center">
          <div className="logo py-2 px-2">
            <Image src={'/logo3.jpg'} priority height={50} width={50} alt='logo'></Image>
          </div>
          <div className="text px-2">
            <h1 className='text-[1.2rem] text-[#61e1e8]' style={{ fontFamily: 'Quicksand, sans-serif' }}>Atal Infotech</h1>
          </div>
        </div>
        <HiMenuAlt3 size={30} id='openbtn' className="my-2" color='#61e1e8' onClick={handleOnClick}></HiMenuAlt3>
        <AiFillCloseCircle id='closebtn' size={40} className="my-2 z-[10] hidden fixed top-0 right-0" color='#DC143C' onClick={handleOnClick}></AiFillCloseCircle>
      </div>
      <div className="desktop-menu px-20 hidden lg:flex lg:flex-row lg:align-center lg:justify-between">
        <div className="logowrapper flex flex-row items-center justify-center">
          <div className="logo py-2 px-2">
            <Image src={'/logo3.jpg'} priority height={50} width={50} alt="desktop-logo"></Image>
          </div>
          <div className="text px-2">
            <h1 className='text-[1.5rem] font-[Poppins, sans-serif] text-[#61e1e8]'>Atal Infotech</h1>
          </div>
        </div>
        <div className='menu py-2'>
          <ul className="flex flex-row">
            <div className="menu-ul  relative py-2" onClick={() => { setActive(0) }}>
              {active == 0 ? (
                <>
                  <Link href={'/'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Home</li></Link>
                  <div className="dash h-[3px] w-16 bg-[#00d69a] absolute rounded-xl bottom-0"></div>
                </>
              ) : (
                <>
                  <Link href={'/'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Home</li></Link>
                </>
              )}

            </div>
            <div className="menu-ul relative py-2" onClick={() => { setActive(1) }}>
              {active == 1 ? (
                <>
                  <Link href={'/skills'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Skills</li></Link>
                  <div className="dash h-[5px] w-16 bg-[#00d69a] absolute rounded-xl bottom-0"></div>
                </>
              ) : (
                <>
                  <Link href={'/skills'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Skills</li></Link>
                </>
              )}
            </div>
            <div className="menu-ul relative py-2" onClick={() => { setActive(2) }}>
              {active == 2 ? (
                <>
                  <Link href={'/about'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>About</li></Link>
                  <div className="dash h-[5px] w-16 bg-[#00d69a] absolute rounded-xl bottom-0"></div>
                </>
              ) : (
                <>
                  <Link href={'/about'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>About</li></Link>
                </>
              )}
            </div>
            <div className="menu-ul relative py-2" onClick={() => { setActive(3) }}>
              {active == 3 ? (
                <>
                  <Link href={'/contact'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Contact Us</li></Link>
                  <div className="dash h-[5px] w-28 bg-[#00d69a] absolute rounded-xl bottom-0"></div>
                </>
              ) : (
                <>
                  <Link href={'/contact'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Contact Us</li></Link>
                </>
              )}
            </div>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar