import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import {  useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
 const navigate=useNavigate();
 const [input,setInput]=useState(data? data:'');
 
 const onSearchHandler=(e)=>{
     e.preventDefault();
     navigate('/course-list/'+input);
 }   
 
  return (
    <div>
      <form onSubmit={onSearchHandler} action="" className='flex items-center max-w-xl w-full md:h-14 h-12 bg-white border border-gray-500/20 rounded'>
        <img src={assets.search_icon} alt="" className='md:w-auto w-10 hover:-translate-y-0.5 transition-all  cursor-pointer px-3' />
        <input value={input} onChange={e=>setInput(e.target.value)} type="text" className='w-full h-full p-1 outline-none text-gray-500/80 bg-gray-10' placeholder='Search for courses' />
        <button className='bg-blue-600 rounded text-white md:px-10 px-7 hover:-translate-y-0.5 transition-all  cursor-pointer md:py-3 py-2 mx-1' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar
