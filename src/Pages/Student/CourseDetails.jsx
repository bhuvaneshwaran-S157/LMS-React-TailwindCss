import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import Loading from '../../Components/Student/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import Footer from '../../Components/Student/Footer';
const CourseDetails = () => {
    const { id } = useParams(); // get course ID from URL
    const { allCourses, calcualateChapterTime, calculateCourseDuration, calculateNumberOfLectures, calculateRating, currency } = useContext(AppContext); // access allCourses
    const [courseData, setCourseData] = useState(null);
    const [openSections, setOpenSections] = useState({});
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [playerData, setPlayerData] = useState(null);

    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const selectedCourse = allCourses.find(c => c._id === id);
            setCourseData(selectedCourse);
        }
    }, [id, allCourses]);

    if (!courseData) {
        return <p className="text-center pt-20">Loading course details...</p>;
    }

    const toggleSection = (index) => {
        setOpenSections(
            (prev) => (
                {
                    ...prev, [index]: !prev[index]
                }
            )
        )

    }


    return courseData ? (
        <>
            <div className='flex md:flex-row flex-col-reverse gap-12 relative items-start justify-between px-8 md:px-36 pt-20 md:pt-30 text-left'>
                <div className='absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-100/70 h-[500px] '></div>

                {/* left column */}
                <div className='max-w-xl z-10 text-gray-500 flex flex-col gap-2'>
                    <h1 className='md:text-[35px] text-2xl font-semibold text-gray-800 w-full'>{courseData.courseTitle}</h1>
                    <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }} className='pt-3 md:text-base text-sm'>
                    </p>
                    {/** Revew and ratings */}
                    <div className='flex items-center space-x-2'>
                        <p>{calculateRating(courseData)}</p>
                        <div className='flex'>
                            {[...Array(5)].map((_, i) => (
                                <img src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} key={i} alt="star" className='w-3.5 h-3.5' />
                            ))}

                        </div>
                        <p className='text-blue-600 underline'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>
                        <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>

                    </div>
                    <div className='text-gray-800 pt-8'>
                        <h2 className='text-xl font-semibold'>Course Structure</h2>
                        <div className='pt-5'>
                            {
                                courseData.courseContent.map((chapter, index) => {
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
                                                                    <img src={assets.play_icon} alt="" />

                                                                    <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-sm'>
                                                                        <p>{lecture.lectureTitle}</p>
                                                                        <div className='flex gap-2'>
                                                                            {
                                                                                lecture.isPreviewFree && <p onClick={() => { setPlayerData({ videoId: lecture.lectureUrl.split('/').pop() }) }} className='text-blue-500 cursor-pointer'>Preview</p>

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
                        <div className='py-20 text-sm md:text-lg '>
                            <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
                            <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription }} className='pt-3 md:text-base text-sm'>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <p>Course By:</p> */}

                {/* right column */}
                <div className='max-w-[424px] z-10 shadow-lg rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
                    {
                        playerData ? <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName='w-full aspect-video' /> :
                            <img src={courseData.courseThumbnail} alt="" />
                    }
                    <div className='p-5'>
                        <div className='flex gap-2 items-center '>
                            <img src={assets.time_left_clock_icon} alt="" />
                            <p className='text-red-500'><span>5 days</span> left at this price!</p>
                        </div>
                        <div className='flex items-center gap-3 pt-2'>
                            <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency} {(courseData.coursePrice - courseData.coursePrice * courseData.coursePrice / 100).toFixed(2)}</p>
                            <p className='line-through md:text-lg text-gray-500'>{currency}{courseData.coursePrice}</p>
                            <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
                        </div>
                        <div className='flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>

                            <div className='flex items-center gap-1'>
                                <img src={assets.star} alt="" />
                                <p>{calculateRating(courseData)}</p>
                            </div>

                            <div className='h-4 w-px bg-gray-500/40'></div>

                            <div className='flex items-center gap-1'>
                                <img src={assets.time_clock_icon} alt="" />
                                <p>{calculateCourseDuration(courseData)}</p>
                            </div>

                            <div className='h-4 w-px bg-gray-500/40'></div>

                            <div className='flex items-center gap-1'>
                                <img src={assets.lesson_icon} alt="" />
                                <p>{calculateNumberOfLectures(courseData)} lessons</p>
                            </div>

                        </div >
                        <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>{isEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>

                        <div className='pt-6 '>
                            <p className='text-lg md:text-xl font-medium text-gray-800'>what's in the course</p>
                            <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                                <li>Lifetime access with free updates.</li>
                                <li>Step-by-step, hands-on project guidance.</li>
                                <li>Downloadable resources and source code.</li>
                                <li>Quizzes to test your knowledge.</li>
                                <li>Certificate of completion.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    ) : <Loading />
};

export default CourseDetails;
