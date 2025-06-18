// AppContext.jsx
import { createContext, use, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY || "₹";
    const navigate = useNavigate();
    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const fetchUserEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses);
    }
    useEffect(() => {
        fetchAllCourses();
        fetchUserEnrolledCourses();
    }, [allCourses]);

    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    };

    const calcualateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
    }

    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration))
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
    }
    const calculateNumberOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }

    const calculateRating = (course) => {
        if (!course.courseRatings || course.courseRatings.length === 0) {
            return 0;
        }
        const totalRating = course.courseRatings.reduce((acc, item) => acc + item.rating, 0);
        return totalRating / course.courseRatings.length;
    };

    const value = {
        currency,
        allCourses,
        fetchUserEnrolledCourses,
        navigate,
        calculateRating,
        setIsEducator,
        isEducator,
        calcualateChapterTime,
        calculateNumberOfLectures,
        enrolledCourses,
        calculateCourseDuration,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// ✅ Default export fixes HMR compatibility
export default AppContextProvider;
