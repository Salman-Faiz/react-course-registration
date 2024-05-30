
import { useEffect, useState } from "react";
import CourseNameList from "./Components/CourseNameList/CourseNameList";
import Courses from "./Components/Courses/Courses";
import CreditHour from "./Components/CreditHour/CreditHour";
import Header from "./Components/Header/Header";
import TotalCredit from "./Components/TotalCredit/TotalCredit";
import TotalPrice from "./Components/TotalPrice/TotalPrice";
import Course from './Components/Course/Course';

function App() {
  const [courseTitles, setCourseTitle] = useState([]);
  const [creditHours, setCreditHours] = useState(0);
  const [remainingHours, setRemainingHours] = useState(20);

  const handleCourseTitle = (course) => {
    const existingCourse = courseTitles.some((c) => c.course_title === course.course_title);

    if (!existingCourse) {
      const newCourseTitle = [...courseTitles, course];
      setCourseTitle(newCourseTitle);
    } else {
      alert('You have already enrolled this course.');
    }
  };

  const handleCreditHours = (Course) => {
    const newCreditHours = Course.course_credit + creditHours;
    if (newCreditHours <= 20) {
      setCreditHours(newCreditHours);
      handleCourseTitle(Course);
    }
  };

  const handleRemainingHours = (Course) => {
    const newRemaining = remainingHours - Course.course_credit;
    if (newRemaining >= 0) {
      setRemainingHours(newRemaining);
    } else {
      alert('Credit Hours limit is over. You cannot take more than 20 credit hours');
    }
  };

  const handleAllFunctionalities = (course) => {
    const existingCourse = courseTitles.some((c) => c.course_title === course.course_title);

    if (!existingCourse) {
      handleCreditHours(course);
      handleRemainingHours(course);
    } else {
      alert('You have already enrolled this course.');
    }
  };

  return (
    <>
      <Header></Header>
      <div className="flex gap-5 justify-between pt-12 mx-auto">
        <Courses handleCourseTitle={handleCourseTitle}
          handleAllFunctionalities={handleAllFunctionalities}></Courses>
        <div className="w-1/3 bg-slate-100 me-5 rounded-lg">
          <CreditHour remainingHours={remainingHours}></CreditHour>
          <CourseNameList courseTitles={courseTitles}></CourseNameList>
          <TotalCredit creditHours={creditHours}></TotalCredit>
          <TotalPrice></TotalPrice>
        </div>
      </div>
    </>
  );
}

export default App;





