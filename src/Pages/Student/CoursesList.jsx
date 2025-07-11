import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import SearchBar from '../../Components/Student/SearchBar';
import { useParams } from 'react-router-dom';
import CourseCard from '../../Components/Student/CourseCard';
import { assets } from '../../assets/assets';
import Footer from '../../Components/Student/Footer';

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  // const {allCourses}=useContext(AppContext);
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();
      input ? setFilteredCourse(
        tempCourses.filter(
          item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
        )
      )
        : setFilteredCourse(tempCourses);
    }
  }, [input, allCourses])
  return (
    <>
      <div className=' relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-400'><span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home</span> / <span>Course List</span></p>
          </div>
          <SearchBar data={input} />
        </div>
        {
          input && <div className='inline-flex border border-gray-600 items-center gap-4 px-4 py-2 mt-8 '>
            <p>{input}</p>
            <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=> navigate('/course-list')} />
          </div>
        }
        <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 my-16 gap-3 px-2 md:p-0'>
          {
            filteredCourse.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CoursesList
