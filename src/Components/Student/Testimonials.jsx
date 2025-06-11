import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'
const Testimonials = () => {
  return (
    <div className='px-8 md:px-0 pb-14'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3 px-18 md:px-0'>Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>
      <div className='grid md:grid-cols-3 grid-cols-1  gap-8 mt-14 md:px-16 sm:px-12'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='text-sm text-left hover:-translate-y-1 transition-all  border border-gray-500/30 pb-6 rounded-lg shadow-black/5 bg-white shadow-[0px_4px_15px_0px] overflow-hidden'>
            <div className='px-4 flex items-center gap-4 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={testimonial.image} alt="" />
              <div>
                <h2 className='text-lg font-medium text-gray-800'>{testimonial.name}</h2>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
            
              <div className='p-5 pb-7'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <img src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} key={i} alt="" />
                  ))}
                </div>
                <p className='text-gray-500 mt-5 '>{testimonial.feedback}</p>
              </div>
              <a href="#" className='hover:underline text-blue-600 px-4'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
