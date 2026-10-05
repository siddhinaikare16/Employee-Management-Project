import Header from "../Others/Header"
import TaskListNumbers from "../Others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"


const EmployeDashboard = (props) => {
  
  
  return (
    <div className="p-8 bg-emerald-200 h-screen">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeDashboard
