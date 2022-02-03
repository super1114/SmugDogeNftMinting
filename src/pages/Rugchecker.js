import React from 'react'
import Footer from '../layouts/Footer'
import member_md from '../assets/images/member_md.png'
import member_ad_asia from '../assets/images/member_ad_asia.png'
import member_ad_europe from '../assets/images/member_ad_europe.png'
import member_mk from '../assets/images/member_mk.png'
import member_cto from '../assets/images/member_cto.png'

import {
    FaFacebookF,
    FaLinkedinIn,
    FaTelegramPlane
} from 'react-icons/fa'

export default function Rugchecker() {
    return (
        <div>
            <section className='bg-darkindigo py-20 text-white text-center'>
                <div className='container mx-auto'>
                    <div className='font-bold mb-20 text-4xl'>
                        OUR TEAM
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        <div>
                            <div className='rounded-md py-10 px-8 bg-indigo-800'>
                                <img className='w-full mb-4' src={member_md} style={{borderRadius: '100%'}} />
                                <div className='text-lg font-semibold mb-4 text-gold'>
                                    Fawcett Johnpioq
                                </div>
                                <div className='w-4/5 mx-auto mb-5  '>
                                    <p>Lead Advisor, Social Media Director</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FaFacebookF className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaLinkedinIn className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaTelegramPlane className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='rounded-md py-10 px-8 bg-indigo-800'>
                                <img className='w-full mb-4' src={member_mk} style={{borderRadius: '100%'}} />
                                <div className='text-lg font-semibold mb-4 text-gold'>
                                    Anselem Michigan
                                </div>
                                <div className='w-4/5 mx-auto mb-5  '>
                                    <p>Online Marketing ZeroLoss</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FaFacebookF className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaLinkedinIn className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaTelegramPlane className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='rounded-md py-10 px-8 bg-indigo-800'>
                                <img className='w-full mb-4' src={member_ad_europe} style={{borderRadius: '100%'}} />
                                <div className='text-lg font-semibold mb-4 text-gold'>
                                    Joel Benedict
                                </div>
                                <div className='w-4/5 mx-auto mb-5  '>
                                    <p>External Advisor</p>
                                    <p>Europe</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FaFacebookF className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaLinkedinIn className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaTelegramPlane className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='rounded-md py-10 px-8 bg-indigo-800'>
                                <img className='w-full mb-4' src={member_ad_asia} style={{borderRadius: '100%'}} />
                                <div className='text-lg font-semibold mb-4 text-gold'>
                                    Sophia Richard
                                </div>
                                <div className='w-4/5 mx-auto mb-5  '>
                                    <p>External Advisor</p>
                                    <p>Asia</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FaFacebookF className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaLinkedinIn className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaTelegramPlane className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='rounded-md py-10 px-8 bg-indigo-800'>
                                <img className='w-full full mb-4' src={member_cto} style={{borderRadius: '100%'}} />
                                <div className='text-lg font-semibold mb-4 text-gold'>
                                    Arrym Michslyd
                                </div>
                                <div className='w-4/5 mx-auto mb-5  '>
                                    <p>CTO</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FaFacebookF className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaLinkedinIn className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                    <FaTelegramPlane className='bg-transparent text-gray-900 mx-3 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
