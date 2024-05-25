import courseTitle from '../../App';
import Course from './../Course/Course';

const CourseNameList = ({ courseTitles }) => {

    console.log(courseTitles);



    return (
        <div className="px-3">
            <h3 className="text-2xl font-semibold text-blue-600 ">Course Name list :{courseTitles.length}</h3>

            {
                courseTitles.map(courseTitle =>
                    < ol > <li className='font-semibold text-xl text-green-950'>{courseTitle.course_title}</li></ol>
                )
            }






            <hr className=" border-teal-500" />
        </div >
    );
};

export default CourseNameList;