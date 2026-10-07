import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"


const AllTasks = () => {
  const [userData , setUserData] = useContext(AuthContext)
 
  
  return (
    <div className="bg-emerald-200 p-5 rounded-lg mt-5 ">
      <div className="bg-emerald-500 py-3 px-4 flex justify-between mt-2 text-lg rounded-lg">
        <h2 className="font-medium w-1/5">Employee Name</h2>
        <h3 className=" font-medium w-1/5">New Task</h3>
        <h5 className="font-medium w-1/5">Active Task</h5>
        <h5 className="font-medium w-1/5">Completed</h5>
        <h5 className="font-medium w-1/5">Failed</h5>
      </div>
      <div>    
        {userData.employees.map((elem , idx)=>{
          return <div key={idx} className=" border-2 border-emerald-500 py-3 px-4 flex justify-between mt-2 text-black text-lg rounded-lg">
        <h2 className="font-medium w-1/5">{elem.firstName}</h2>
        <h3 className="font-medium w-1/5  text-blue-500">{elem.taskCounts.newTask} </h3>
        <h5 className="font-medium w-1/5  text-fuchsia-700 ">{elem.taskCounts.active}</h5>
        <h5 className="font-medium w-1/5 text-black">{elem.taskCounts.completed}</h5>
        <h5 className="font-medium w-1/5 text-red-500">{elem.taskCounts.failed}</h5>
      </div>
        })}
      </div>
      
    </div>
  )
}

export default AllTasks
