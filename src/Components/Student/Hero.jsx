import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 space-y-7 pt-20 md:px-7 px-0 text-center bg-gradient-to-b  from-cyan-100/70 '>
      <h1 className='md:text-[42px] text-3xl relative mx-auto max-w-3xl font-bold text-gray-800 '>Empower your future with the courses desgned to
        <span className='text-blue-600'> fit your choice </span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl text-[14px] mx-auto px-6'>
        we bring together the world-class instructors,
        interactive contentm and a supportive community to help you achieve your personal and professional goal
      </p>
      <p className='md:hidden text-gray-500 max-w-2xl text-[14px] mx-auto px-6'>
        we bring together to help you achieve your personal and professional goal
      </p>
      <SearchBar/>
    </div>
  )
}

export default Hero
