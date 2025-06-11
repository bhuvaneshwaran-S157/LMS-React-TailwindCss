import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';
import CourseCard from './CourseCard';

const CourseSection = () => {

  const { allCourses } = useContext(AppContext);

  return (
    <div className='px-8 md:px-40 py-16 '>
      <h2 className='text-3xl font-medium text-gray-800 '>Learn from the best</h2>
      <p className='text-sm md:text-base w-full text-gray-500 mt-3 '>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p><br />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0, 4).map((course) => <CourseCard key={course._id} course={course} />)}
      </div>
      <Link className='border  text-gray-500 border-gray-500/30 px-10 py-3  rounded' onClick={() => scrollTo(0, 0)} to={'/course-list'}>
        Show All Courses</Link>
    </div>
  )
}

export default CourseSection
