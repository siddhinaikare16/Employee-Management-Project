import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [userData , setUserData] = useContext(AuthContext)

  const [taskTitle , setTaskTitle] = useState('')
  const [taskDescription , setTaskDescription] = useState('')
  const [taskDate , setTaskDate] = useState('')
  const [assignTo , setAssignTo] = useState('')
  const [category , setCategory] = useState('')

  const [newtask , setNewTask] = useState({})
  
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Task Created");
    
    setNewTask({taskTitle,taskDescription,taskDate,category,assignTo,active:false , newTask:true , completed : false , failed : false})

    
    const data = userData.employees
    console.log(data);
    
    
    data.forEach(elem => {
      if (assignTo == elem.firstName) {
          elem.tasks.push(newtask)
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1
          console.log(elem);   
      }
    });

    // localStorage.setItem('employees',JSON.stringify(data))
    console.log(data);
    
    // setUserData(data)


    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
    
  }

  return (
    <div className="bg-emerald-200 p-5 mt-3 rounded-lg">
      <form className="text-black flex w-full flex-wrap items-start justify-between mt-5"
       onSubmit={
        (e)=>{
          submitHandler(e)
        }
       }>

    <div className="w-1/2">

      <div> 
      <h3 className="text-lg  mb-0.5">Task Title</h3>
      <input type="text" placeholder="Make UI Design"
      className='text-base py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
      value={taskTitle} 
      onChange={(e)=>{
        setTaskTitle(e.target.value)
      }}
      />
     </div>

     <div>
      <h3 className="text-lg  mb-0.5">Date</h3>
      <input type="date"
      className='text-base py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
      value={taskDate}  
      onChange={(e)=>{
        setTaskDate(e.target.value)
      }}
      />
     </div>

     <div>
      <h3 className="text-lg  mb-0.5">Assign to</h3>
      <input type="text" placeholder="Employee Name"
      className='text-base py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
      value={assignTo} 
      onChange={(e)=>{
        setAssignTo(e.target.value)
      }} />
     </div>

      <div>
      <h3 className="text-lg  mb-0.5">Category</h3>
      <input type="text" name="" id="" placeholder="design,dev"
      className='text-base py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' 
      value={category} 
      onChange={(e)=>{
        setCategory(e.target.value)
      }}/>
      </div>

    </div>

    <div className="w-2/5 flex flex-col items-start">
      <h3 className="text-lg mb-0.5">Description</h3>
      <textarea name="" id="" cols="30" rows="10" className="w-full h-44 text-base py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
      value={taskDescription} 
      onChange={(e)=>{
        setTaskDescription(e.target.value)
      }}></textarea>
      <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg mt-4 w-full">Create Task</button>
    </div>
       
     </form>
    </div>
  )
}

export default CreateTask
