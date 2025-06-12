import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const CourseDetails = () => {
  const { id } = useParams(); // get course ID from URL
  const { allCourses } = useContext(AppContext); // access allCourses
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const selectedCourse = allCourses.find(c => c._id === id);
      setCourse(selectedCourse);
    }
  }, [id, allCourses]);

  if (!course) {
    return <p className="text-center pt-20">Loading course details...</p>;
  }

  return (
    <div className='p-10 text-left'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>{course.courseTitle}</h1>
      <p className='text-gray-600 mb-6'>By {course.educator.name}</p>
      <img src={course.courseThumbnail} alt={course.courseTitle} className='w-full max-w-md mb-6' />
      <div dangerouslySetInnerHTML={{ __html: course.courseDescription }} className='prose max-w-none' />
    </div>
  );
};

export default CourseDetails;
