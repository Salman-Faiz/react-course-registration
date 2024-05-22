import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleCourseTitle,handleAllFunctionalities}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('build.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-6 ps-5">

            {
                courses.map(course => <Course course={course}
                    handleAllFunctionalities={handleAllFunctionalities}
                   ></Course>)
            }
        </div>
    );
};

export default Courses;