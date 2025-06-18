import humanizeDuration from 'humanize-duration';
import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import { AppContext } from '../../Context/AppContext';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Footer from '../../Components/Student/Footer';
import Rating from '../../Components/Student/Rating';
const Player = () => {
  const { enrolledCourses, calcualateChapterTime } = useContext(AppContext);
  const [courseData, setCourseData] = useState(null);
  const { courseId } = useParams();
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    console.log("courseId:", courseId);
    console.log("enrolledCourses:", enrolledCourses);

    const course = enrolledCourses.find(course => course._id === courseId);
    if (course) {
      setCourseData(course);
      console.log("loaded");
    } else {
      console.log("Course not found");
    }
  }, [courseId, enrolledCourses]);


  const toggleSection = (index) => {
    setOpenSections(
      (prev) => (
        {
          ...prev, [index]: !prev[index]
        }
      )
    )

  }
  return (
    <>
<div className='p-4 sm:p-10 md:grid md:grid-cols-2 gap-10 md:px-36'>
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {
              courseData?.courseContent?.map((chapter, index) => {
                return (
                  <div key={index} className='border border-gray-300 mb-2 rounded bg-white'>
                    <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(index)}>
                      <div className='flex items-center gap-2'>
                        <img src={assets.down_arrow_icon} alt="" className={`transition-transform duration-300 ${openSections[index] ? 'rotate-180' : ''}`} />
                        <p className='font-medium md:text-base text-sm' >{chapter.chapterTitle}</p>
                      </div>
                      <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures -{calcualateChapterTime(chapter)}</p>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out`}
                      style={{ maxHeight: openSections[index] ? '1000px' : '0px' }}
                    >
                      <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                        {
                          chapter.chapterContent.map((lecture, i) => {
                            console.log(`Section ${index} open: `, openSections[index]);

                            return (
                              <li key={i} className='flex items-center gap-2 py-1'>
                                <img src={false ? assets.blue_tick_icon : assets.play_icon} alt="" />

                                <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-sm'>
                                  <p>{lecture.lectureTitle}</p>
                                  <div className='flex gap-2'>
                                    {
                                      lecture.isPreviewFree && <p onClick={() => { setPlayerData({ ...lecture, chapter: index + 1, lecture: i + 1 }) }} className='text-blue-500 cursor-pointer'>Watch</p>

                                    }
                                    <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                                  </div>
                                </div>

                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
           <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold '>Rate this Course:</h1>
            <Rating initialRating={0} />
           </div>
        </div>

        <div className='md:mt-10'>
          {
            playerData ? (
              <div>
                <YouTube videoId={playerData.lectureUrl.split('/').pop()} iframeClassName='w-full aspect-video' />
                <div className='flex justify-between items-center mt-1'>
                  <p className=''>
                    {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                  </p>
                  <button className='text-blue-600'>{false ? 'Completed':'Mark as Completed'}</button>
                </div>
              </div>
            ) :
              <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Player;
