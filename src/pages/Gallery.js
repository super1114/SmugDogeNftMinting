import React, { useState, useEffect } from 'react'
import main from "../assets/images/main.png"
import data from "./data.js"
import Footer from '../layouts/Footer'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
export default function Dashboard() {
  console.log(data);
   
  return (
    <div className='w-full h-full text-white'>
      <div className='pt-10 bg-black'>
        <div className='container flex justify-center px-10 mx-auto w-full md:flex-row items-center'>
          <div className="flex justify-center items-center mt-4 pt-4">
            <img className="w-full" src={main} />
          </div>
        </div>
      </div>
      <section className="bg-black">
        <div className="container mx-auto flex justify-center">
          <div className="px-5 w-full">
            <h1 className='text-3xl text-center pt-2'>Traits with rarity for SmugDoge</h1>
            <div className="mt-5 mb-5">
              <Accordion atomic={true}>
                {data.map((item, index) => (
                  <AccordionItem title={item.title} className="border-b-2 border-gray bg-black">
                      {item.contents}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <hr className="border-b border-gray opacity-25 my-0 py-0" />
      </section>
      <Footer />
    </div>
  )
}
