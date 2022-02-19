import React, { useState, useEffect } from 'react'
import photo1 from "../assets/images/11.png"
import photo2 from "../assets/images/12.png"
import photo3 from "../assets/images/13.png"
import photo4 from "../assets/images/14.png"
import memes from "../assets/images/memes.png"

import Footer from '../layouts/Footer'

export default function Dashboard() {
  return (
    <div className='w-full h-full text-white z-10'>
      <div className='pt-24 bg-black'>
        <div className='container px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          <div
            className="flex flex-col w-full md:w-2/3 rounded-md justify-center items-start text-center md:text-left py-5 mt-5 border-2 border-gray bg-metal">
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-center items-center mt-4 pt-4">
                <img className="w-full md:w-2/5" src={photo1} alt />
              </div>
            </div>
            <h1 className="text-white px-4 text-2xl font-bold pt-4">SmugHub Director</h1>
            <p className="px-4 pt-4">170,886 VIEWS</p>
            <div className="relative pt-4 px-4 w-full">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
                <div className="w-5/6 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green"></div>
                <div className="w-1/6 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red"></div>
              </div>
            </div>
            <p className="px-4">91% &nbsp;&nbsp;&nbsp; 698 &nbsp;&nbsp;65</p>
          </div>

          <div className="w-full md:w-1/3 py-8 pl-12 text-center">
            <div className="grid grid-cols-2 gap-2">
              <div className="border-2 border-gray">
                <img className="w-full" src={memes} alt />
                <div className="lg:pl-2 text-white text-center">
                  <p className="text-yellow font-bold">Online Furry Yiff</p>
                  <p>1.1M views 95%</p>
                </div>
              </div>
              <div className="p-2  border-2 border-gray">
                <img className="w-full" src={memes} alt />
                <div className="lg:pl-2 text-white text-center">
                  <p className="text-yellow font-bold">Online Furry Yiff</p>
                  <p>180K views 79%</p>
                </div>
              </div>
              <div className="p-2  border-2 border-gray">
                <img className="w-full" src={memes} alt />
                <div className="lg:pl-2 text-white text-center">
                  <p className="text-yellow font-bold">Online Furry Yiff</p>
                  <p>1.6M views 80%</p>
                </div>
              </div>
              <div className="p-2  border-2 border-gray">
                <img className="w-full" src={memes} alt />
                <div className="lg:pl-2 text-white text-center">
                  <p className="text-yellow font-bold">Online Furry Yiff</p>
                  <p>481K views 86%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-8 bg-black">
        <div className="container mx-auto">
          <div className="md:w-2/3 m-8 px-5 bg-metal">
            <h1
              className="w-full py-3 text-2xl font-bold leading-tight text-white"
            >
              Similar Unique NFTs
            </h1>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="border-2 border-gray-700">
                  <img src={photo2} alt slot="svg" />
                </div>
                <p className="text-sm text-yellow my-2">Blowjob-yiff </p>
              </div>
              <div>
                <div className="border-2 border-gray">
                  <img src={photo3} alt slot="svg" />
                </div>
                <p className="text-sm text-yellow my-2">Umbreon X </p>
              </div>
              <div>
                <div className="border-2 border-gray">
                  <img src={photo4} alt slot="svg" />
                </div>
                <p className="text-sm text-yellow my-2">Garyu </p>
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
