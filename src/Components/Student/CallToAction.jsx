import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
    return (
        <div className='flex flex-col md:px-0 px-8 items-center gap-4 pt-10 pb-24'>
          <h1 className='font-semibold text-2xl'>Learn anything, anytime, anywhere</h1>
          <p>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
          <div className='flex gap-4  items-center'>
            <button className='px-10 py-3 bg-blue-600 text-white rounded-lg'>Get Started</button>
            <button className='flex gap-2 items-center'>Learn More <img src={assets.arrow_icon} alt="" /></button>
          </div>
        </div>
    )
}

export default CallToAction
