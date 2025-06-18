import { Route, Routes, useMatch } from 'react-router-dom';
import './App.css'
import "@fontsource/poppins"; // Defaults to weight 400
import Home from './Pages/Student/Home';
import CoursesList from './Pages/Student/CoursesList';
import CourseDetails from './Pages/Student/CourseDetails';
import MyEnrollments from './Pages/Student/MyEnrollments';
import Loading from './Components/Student/Loading';
import Player from './Pages/Student/Player';
import Educator from './Pages/Educator/Educator';
import DashBoard from './Pages/Educator/DashBoard';
import AddCourse from './Pages/Educator/AddCourse';
import MyCourses from './Pages/Educator/MyCourses';
import StudentsEnroll from './Pages/Educator/StudentsEnroll';
import NavBar from './Components/Student/NavBar';

function App() {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute ? <NavBar /> : null}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course-list/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<DashBoard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnroll />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App