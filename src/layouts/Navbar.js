import React, { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/ph_smugdoge.svg'
import Sidebar from './Sidebar'

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const lightPaperLink = 'https://drive.google.com/file/d/16bC22RMgPc5hUMIYpJELsNtWB6GMCLgb/view?usp=sharing'
  return (
    <>
      <div className='text-white'>
        <div className='mx-auto items-center bg-metal border-b-2 border-midnight py-3 pl-3'>
          <div className='flex'>
            <a href='/'>
              <img src={logo} className='h-10 mt-5' />
            </a>
            <div className='ml-auto'></div>
            <div className='hidden lg:block flex items-center mt-5'>
              <a href='/' className='ml-3 rounded-md font-semibold cursor-pointer bg-midnight py-2 px-7 hover:border-gray hover:bg-orange hover:text-gray'>
                HOME
              </a>
              <a href='/#mint' className='ml-3 rounded-md font-semibold bg-midnight py-2 px-7 hover:border-gray hover:bg-orange hover:text-gray'>
                MINT NFTS
              </a>
              <a href='/gallery' className='ml-3 rounded-md font-semibold bg-midnight py-2 px-7 hover:border-gray hover:bg-orange hover:text-gray'>
                TRAIT GALLERY
              </a>
              <a href='/toaster' className='ml-3 rounded-md font-semibold bg-midnight py-2 px-7 hover:border-gray hover:bg-orange hover:text-gray'>
                TOASTER MEMES
              </a>
            </div>
            <div className='ml-3 lg:hidden'>
              <Hamburger toggled={sideBarOpen} toggle={setSideBarOpen} />
            </div>
          </div>
          {
            sideBarOpen ? (
              <div className="lg:hidden md:flex sm:flex xs:flex flex-col justify-between flex-1 items-center border-l-4 border-yellow pl-3" id="mobile_menu">
                <div className="text-gray">MENU</div>
                <div className="flex items-center justify-start">
                  <a href='/' className="text-white pr-4">HOME</a>
                  <a href="/gallery" className="text-white pr-4">TRAIT GALLERY</a>
                  <a href='/toaster' className="text-white pr-4">TOASTER MEMES</a>
                </div>
                <div className='flex'>
                  <div>
                    <div className="text-gray mt-4">SOCIAL</div>
                    <div className="flex items-center justify-start">
                      <a className="text-white pr-4" href="https://twitter.com/smugdoge" target="_blank">Twitter</a>
                      <a className="text-white pr-4" href="https://t.me/smugdogeone" target="_blank">Telegram</a>
                      <a className="text-white pr-4" href="https://discord.gg/ES2xGpDtrN" target="_blank">Discord</a>
                    </div>
                  </div>
                  <div className='ml-3'>
                    <div className="text-gray mt-4">COMPANY</div>
                    <div className="flex items-center justify-start">
                      <a className="text-white pr-4" href="mailto:hello@smugdoge.com">Contact</a>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <></>
            )
          }
        </div>
      </div>
    </>
  )
}
