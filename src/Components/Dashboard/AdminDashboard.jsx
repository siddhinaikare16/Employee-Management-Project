
import AllTasks from "../Others/AllTasks"
import CreateTask from "../Others/CreateTask"
import Header from "../Others/Header";


const AdminDashboard = (props) => {
  return (
    <div className="p-8 bg-emerald-300 h-full">
     <Header changeUser ={props.changeUser} />
     <CreateTask/>
     <AllTasks/>
    </div>
  )
}

export default AdminDashboard
