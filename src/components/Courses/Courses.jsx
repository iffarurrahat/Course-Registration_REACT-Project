import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourses }) => {
    // console.log(ToastContainer);
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleCourses={handleCourses}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleCourses: PropTypes.func,
} 

export default Courses;



