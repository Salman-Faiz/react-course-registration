import CourseNameList from "./Components/CourseNameList/CourseNameList"
import Courses from "./Components/Courses/Courses"
import CreditHour from "./Components/CreditHour/CreditHour"
import Header from "./Components/Header/Header"
import TotalCredit from "./Components/TotalCredit/TotalCredit"
import TotalPrice from "./Components/TotalPrice/TotalPrice"



function App() {


  return (
    <>
      <Header></Header>
      <div className="flex gap-5 justify-between pt-12 mx-auto">
        <Courses></Courses>
        <div className="w-1/3 bg-slate-100 me-5 rounded-lg">
        <CreditHour></CreditHour>
        <CourseNameList></CourseNameList>
        <TotalCredit></TotalCredit>
        <TotalPrice></TotalPrice>
        </div>
      </div>
    </>
  )
}

export default App
