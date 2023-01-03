import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = (props) => {

  const [active, setActive] = useState(props.active)


  const handleOnClick = () => {
    document.getElementById('menu-options').classList.toggle('hidden')
  }


  return (
    <div className="navbar-wrapper bg-[#040d23] relative">
      <div id='menu-options' className="mobile-menu-options hidden absolute z-[10] w-[12rem] sticky top-0 h-screen bg-gray-900 text-white w-[5rem] px-2 lg:hidden">
        <div className="options py-2">
          <div className="option-tile pl-4 py-2 flex flex-row items-center justify-start">
            <span style={{fontFamily:'Poppins, sans-serif'}} className="text-[1.2rem]">Home</span>
          </div>
          <div className="option-tile py-2 pl-4 flex flex-row items-center justify-start">
            <span style={{fontFamily:'Poppins, sans-serif'}} className="text-[1.2rem]" >Skills</span>
          </div>
          <div className="option-tile py-2 pl-4 flex flex-row items-center justify-start">
            <span style={{fontFamily:'Poppins, sans-serif'}} className="text-[1.2rem]">About</span>
          </div>
          <div className="option-tile py-2 pl-4 flex flex-row items-center justify-start">
            <span style={{fontFamily:'Poppins, sans-serif'}} className="text-[1.2rem]">Work</span>
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
        <HiMenuAlt3 size={30} className="my-2" color='#61e1e8' onClick={handleOnClick}></HiMenuAlt3>
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
                  <Link href={'/work'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Work</li></Link>
                  <div className="dash h-[5px] w-16 bg-[#00d69a] absolute rounded-xl bottom-0"></div>
                </>
              ) : (
                <>
                  <Link href={'/work'}><li className='px-2 text-lg text-[#61e1e8]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Work</li></Link>
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