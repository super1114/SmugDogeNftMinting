import React from 'react'
import classnames from 'classnames'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

export default function Sidebar({ show, setShow }) {
  const lightPaperLink = 'https://drive.google.com/file/d/16bC22RMgPc5hUMIYpJELsNtWB6GMCLgb/view?usp=sharing'

  return (
    <div>
      <div
        className={classnames('sidebar-backdrop', 'text-white', { 'sidebar-backdrop-active': show })}
        onClick={() => {
          if (show) {
            setShow(false)
          }
        }}
      />
      <div className={classnames('sidebar', 'text-white', { 'sidebar-active': show })}>
        <div className='flex'>
          <div className='ml-auto'>
            <Hamburger size={16} toggled={show} toggle={setShow} />
          </div>
        </div>
        <Link to={''}>
          <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
            Home
          </div>
        </Link>
        <Link to={'/mintsection'}>
          <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
            Launch App
          </div>
        </Link>
        <Link to={'/idolaunchpad'}>
          <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
            IDO Launchpad
          </div>
        </Link>
        <Link to={'/rugchecker'}>
          <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
            Rug Checker
          </div>
        </Link>
        <a href={lightPaperLink} target={'_blank'}>
          <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
            LightPaper
          </div>
        </a>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          FAQ
        </div>
      </div>
    </div>
  )
}
