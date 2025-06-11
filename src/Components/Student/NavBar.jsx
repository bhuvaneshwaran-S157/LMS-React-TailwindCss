import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import { Link, Navigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../Context/AppContext';
const NavBar = () => {
    const isCourseListPage = location.pathname.includes('/course-list');
    const { navigate,isEducator } = useContext(AppContext);
    const { openSignIn } = useClerk();
    const { user } = useUser();
   
    return (
        <div className={`flex justify-between items-center  px-4 py-4 lg:px-36 md:px-10 sm:px-10 border-gray-500 border-b ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <img src={assets.logo} onClick={()=>navigate('/')} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    {user && <>
                        <button className='cursor-pointer hover:underline' onClick={()=> navigate('/educator')}>{isEducator? 'Educator DashBoard':'Become Educator'}</button>
                        | <Link to={'/my-enrollments'}>My Enrollments</Link>
                    </>}
                </div>
                {user ? <UserButton /> :
                    <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}
            </div>
            {/*for phone size*/}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                <div>
                    <button>Become Educator</button>
                    |<Link to={'/my-enrollments'}>My Enrollments</Link>
                </div>
                {
                    user ? <UserButton /> :
                        <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>
                }
            </div>
        </div>
    )
}

export default NavBar