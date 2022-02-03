import React from 'react'
import rocket from '../assets/images/rocket.png'
import idolaunchpad from '../assets/images/idolaunchpad.png'
import Footer from '../layouts/Footer'
import { FaShoppingBasket } from 'react-icons/fa'

export default function Idolaunchpad() {
  return (
    <div>
      <section className='bg-darkindigo py-32'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex items-center'>
              <img src={rocket} className='mx-auto' />
            </div>
            <div className='text-center lg:text-left text-white py-4 font-semibold'>
              <div className='text-4xl mb-8'>
                IDO LaunchPad
              </div>
              <div className='leading-relaxed mb-12'>
                <p>
                  Use <span className='text-gold'>Zeroloss</span> Token ZLT, to buy in early in IDO projects.
                </p>
                <p>
                  ZEROLOSS IDO will require new projects to lock a large share of their liquidity and team tokens on our third party partner’s locker platform. We make it easy, safe and secure to lock any BEP-20 based token in seconds protecting investors from ‘rug pulls’.
                </p>
                <p>
                  Hold 2000 ZLT to get whitelisted for IDO's
                </p>
              </div>
              <button className='bg-gold mx-auto lg:mx-0 py-5 px-7 rounded-md text-black font-bold flex items-center idolauchpad_btn shadow-md'>
                <FaShoppingBasket className='mr-5' />
                buy ZLT for IDO
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white py-6'>
        <div className='container text-center'>
          <div className='text-4xl lg:text-5xl font-bold py-8'>
            No fees, Low risk, No rug polls, only rewards
          </div>
          <div className='text-gray-600 py-8'>
            Zero risk IDO enables promising projects to raise capital on the BSC. Investors are safe to invest in early-stage projects through our KYC system and strict due diligence. We make sure only audited, carefully vetted, and analyzed blockchain projects will be chosen for IDO.
          </div>
        </div>
      </section>
      <section className='pt-10 bg-white relative overflow-hidden'>
        <div className='bg-indigo-900 py-20'>
          <div className="svg-shape">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1717" className="svg replaced-svg h-full w-full">
              <defs>
                <path id="wave-7-a" d="M0,-1.13686838e-13 C531.916262,62.1069999 890.207727,267.759397 1074.87439,616.95719 C1259.54106,966.154983 1541.20773,1125.14851 1919.87439,1093.93778 L1919.87439,1716 L0,1716 L0,-1.13686838e-13 Z"></path>
                <linearGradient id="wave-7-b" x1="99.305%" x2="99.305%" y1="3.216%" y2="100%">
                  <stop offset="0%" stopColor="#6987FF" stopOpacity="0"></stop>
                  <stop offset="100%" stopColor="#6987FF"></stop>
                </linearGradient>
              </defs>
              <g className='w-full' fill="none" fillRule="evenodd" transform="translate(-.126 .509)">
                <mask id="wave-7-c" fill="#fff">
                  <use href="#wave-7-a"></use>
                </mask>
                <use fill="#6987FF" opacity=".147" href="#wave-7-a"></use>
                <path fill="url(#wave-7-b)" d="M1919.87439,1716 L1.13686838e-13,1716 C1020.66327,1623.64495 1663.28807,1295.97829 1927.87439,733 C1927.87439,733 1925.20773,1060.66667 1919.87439,1716 Z" mask="url(#wave-7-c)" opacity=".147"></path>
              </g>
            </svg>
          </div>
          <div className="svg-shape--top w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 407" className="svg w-100 replaced-svg">
              <path fill="#FFF" fillRule="evenodd" d="M0.874393486,0.508626345 L1920.87439,0.508626345 L1920.87439,406.508626 C1600.87439,271.175293 1280.87439,203.508626 960.874393,203.508626 C640.874393,203.508626 320.874393,271.175293 0.874393486,406.508626" transform="matrix(-1 0 0 1 1920.749 0)"></path>
            </svg>
          </div>
          <div className='container relative'>
            <img src={idolaunchpad} className='w-full -mt-32' />
            <div className='mt-10 w-3/5 mx-auto text-center'>
              <div className='text-gold text-4xl lg:text-5xl font-semibold'>
                <p className='leading-relaxed'>
                  THE SAFEST
                </p>
                <p className='leading-relaxed'>
                  LAUNCHPAD ON BSC
                </p>
              </div>
              <div className='font-semibold text-white mt-5'>
                Zeroloss developers We will check for exploits and vulnerabilities in any smart contracts, such as: Minting, Proxies and Backdoors.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
