import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div  className='pt-16'>
        <p className='text-base text-gray-500'>Trusted by learners from</p>
        <div className='flex gap-6 flex-wrap items-center justify-center md:gap-16 md:mt-10 mt-5 p-2'>
            <img src={assets.microsoft_logo} alt="microsoft" className='w-20 md:w-28'/>
            <img src={assets.walmart_logo} alt="" className='w-20 md:w-28'/>
            <img src={assets.accenture_logo} alt="" className='w-20 md:w-28'/>
            <img src={assets.adobe_logo} alt="" className='w-20 md:w-28'/>
            <img src={assets.paypal_logo} alt="" className='w-20 md:w-28'/>
        </div>
    </div>
  )
}

export default Companies