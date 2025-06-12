import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='
      flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 py-10 border-b border-white/30
      '>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt='logo' className='' />
          <p className='mt-6 text-center md:text-left text-sm text-white'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='text-white mb-5 font-semibold justify-center'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full '>
          <h2 className='font-semibold text-white'>Subscribe To Our NewsLetter</h2>
          <p className='text-white pt-4 pb-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="text" className='bg-gray-700 px-2 py-2 border border-gray-400 text-gray-400 rounded-sm' placeholder='Enter your email' />
            <button className='py-2 px-2 bg-blue-600 rounded-sm text-white hover:-translate-0.5 transition-all'>Subscribe</button>
          </div>
        </div>
      </div>

      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 Edemy. All rights Reserved.</p>
    </footer>
  )
}

export default Footer
