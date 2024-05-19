import Courses from "./Components/Courses/Courses"
import CreditHour from "./Components/CreditHour/CreditHour"
import Header from "./Components/Header/Header"



function App() {


  return (
    <>
      <Header></Header>
      <div className="flex gap-5 justify-between pt-12 mx-auto">
        <Courses></Courses>
        <div className="w-1/3 bg-yellow-300 me-5">
        <CreditHour></CreditHour>
        </div>
      </div>
    </>
  )
}

export default App
