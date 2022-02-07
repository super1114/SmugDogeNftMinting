import React, { useState, useEffect } from 'react'
import photo1 from "../assets/images/main.png"
import photo2 from "../assets/images/m1.png"
import photo3 from "../assets/images/m2.png"
import photo4 from "../assets/images/m3.png"
import photo5 from "../assets/images/m4.png"
import photo6 from "../assets/images/m5.png"
import photo7 from "../assets/images/m6.png"
import photo8 from "../assets/images/m7.png"
import photo9 from "../assets/images/m8.png"
import photo10 from "../assets/images/m9.png"
import memes from "../assets/images/memes.png"

import Footer from '../layouts/Footer'

export default function Dashboard() {
  return (
    <div className='w-full h-full text-white'>
      <div className='pt-10 bg-black'>
        <div className='container px-10 mx-auto text-center'>
          <h1 className='text-3xl'>You discoverd SECRET SMUG NFT. Under this page 10 special  and unique NFT's for minting with price 690 ONE (9 pics) and 2718 ONE (1pic).</h1>
        </div>
        <div className='container flex justify-center px-10 mx-auto w-full md:flex-row items-center'>
          <div
            className="w-full md:w-2/3 rounded-md md:text-left py-5 mt-5 border-2 border-gray bg-metal">
            <div className="flex justify-center items-center mt-4 pt-4">
              <img className="w-full md:w-2/5" src={photo1} alt />
            </div>
            <h1 className="text-white px-4 text-2xl font-bold pt-4 text-center">2718 ONE</h1>
          </div>
        </div>
      </div>
      <section className="pt-8 bg-black">
        <div className="container mx-auto flex justify-center">
          <div className="md:w-2/3 m-8 px-5 bg-metal">
            <div className="grid grid-cols-3 gap-8 mt-10 mb-5">

              <div className="border-2 border-gray-700">
                <img src={photo2} alt slot="svg" />
              </div>
              <div className="border-2 border-gray">
                <img src={photo3} alt slot="svg" />
              </div>
              <div className="border-2 border-gray">
                <img src={photo4} alt slot="svg" />
              </div>
              <div className="border-2 border-gray-700">
                <img src={photo5} alt slot="svg" />
              </div>
              <div className="border-2 border-gray">
                <img src={photo6} alt slot="svg" />
              </div>
              <div className="border-2 border-gray">
                <img src={photo7} alt slot="svg" />
              </div>
              <div>
                <div className="border-2 border-gray-700">
                  <img src={photo8} alt slot="svg" />
                </div>
                <p className='mt-5 text-center'>690 ONE</p>
              </div>
              <div>
                <div className="border-2 border-gray">
                  <img src={photo9} alt slot="svg" />
                </div>
                <p className='mt-5 text-center'>690 ONE</p>
              </div>
              <div>
                <div className="border-2 border-gray">
                  <img src={photo10} alt slot="svg" />
                </div>
                <p className='mt-5 text-center'>690 ONE</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-b border-gray opacity-25 my-0 py-0" />
      </section>
      <Footer />
    </div>
  )
}
