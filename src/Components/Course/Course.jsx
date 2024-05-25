
import CourseNameList from './../CourseNameList/CourseNameList';

const Course = ({ course,handleCourseTitle ,handleAllFunctionalities}) => {
    // console.log(course)
    const { course_credit, course_title, cover_img, description, price } = course;
    return (
        <div className="bg-slate-100 rounded-xl max-h-screen flex flex-col">
            <div className="p-5"><img className="rounded-lg w-full h-40" src={cover_img} alt="" /></div>
            <div className="px-5  my-1">
                <h1 className="text-2xl font-semibold ">
                    {course_title}
                </h1>
                <p className="py-1 flex-grow">
                    {
                        description
                    }
                </p>
            </div>
           <div className='flex-grow'>
           <div className="px-5 flex justify-between pt-3 text-2xl">
                <p>bdt {price}</p>
                <p>{course_credit} hours</p>
            </div>
          
           </div>
           <div className="mx-5 mt-5 mb-3  bg-blue-600 rounded text-center">
          <button onClick={()=>{handleAllFunctionalities(course)}} className="py-2 text-center text-3xl ">Submit</button>
         
          </div>
        </div>
    );
};

export default Course;