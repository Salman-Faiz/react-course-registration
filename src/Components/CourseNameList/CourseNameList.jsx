import courseTitle from '../../App';

const CourseNameList = ({ courseTitle }) => {

    return (
        <div className="px-3">
            <h3 className="text-2xl font-semibold text-blue-600 ">Course Name list :{courseTitle.length}</h3>
            
                    {
                        courseTitle.map(courseTitle =><ol><li className='font-semibold text-xl text-green-950'>{courseTitle.course_title}</li></ol> )
                    }
               
          



            <hr className=" border-teal-500" />
        </div>
    );
};

export default CourseNameList;