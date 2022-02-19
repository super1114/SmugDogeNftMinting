import React from 'react'
import ph_smugdoge from '../assets/images/ph_smugdoge.svg'

import {
  FaTwitter,
  FaReddit,
  FaTelegramPlane,
} from 'react-icons/fa'


export default function Footer() {
  return (
    <section>
      <div className="container mx-auto px-8 text-white">
        <div className="w-full flex flex-col md:flex-row py-8">
          <div className="flex-1 mb-6 flex items-center">
            <img src={ph_smugdoge} />
          </div>
          <div className="flex-1 ml-3">
            <p className="uppercase text-gray md:mb-6">Menu</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href='/'
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >HOME</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/gallery"
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >TRAIT GALLERY</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href='/toaster'
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >TOASTER MEMES</a
                >
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/smugdoge"
                  target="_blank"
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >Twitter</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://t.me/smugdogeone" 
                  target="_blank"
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >Telegram</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://discord.gg/ES2xGpDtrN"
                  target="_blank"
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >Discord</a
                >
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="mailto:hello@smugdoge.com"
                  className="no-underline hover:underline text-gray-100 hover:text-orange-500"
                >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
