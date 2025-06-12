import React from 'react'
import NavBar from '../../Components/Student/NavBar'
import Hero from '../../Components/Student/Hero'
import SearchBar from '../../Components/Student/SearchBar'
import Companies from '../../Components/Student/Companies'
import CourseSection from '../../Components/Student/CourseSection'
import Testimonials from '../../Components/Student/Testimonials'
import CallToAction from '../../Components/Student/CallToAction'
import Footer from '../../Components/Student/Footer'

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-7 text-center'>
            <Hero />
            <Companies />
            <CourseSection />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home
