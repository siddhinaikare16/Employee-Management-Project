import { useContext,  useEffect,  useState } from "react"
import Login from "./Components/Auth/Login"
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import { AuthContext } from "./Context/AuthProvider"


const App = () => {

  const [user, setUser] = useState(null)

  const [LoggedInData, setLoggedInData] = useState(null)
  
  const [userData , setUserData] = useContext(AuthContext)
  
  useEffect(()=>{
    const LoggedIn= localStorage.getItem('LoggedIn')
    if (LoggedIn) {
      const userData = JSON.parse(LoggedIn)  
      setUser(userData.role)
      setLoggedInData(userData.data)
    }
  },[])

  const handleLogin = (email,password) => 
    {
    if (email == 'admin@example.com' && password == '123') 
    {
      setUser('admin')
      setLoggedInData({role:'admin'})
      localStorage.setItem('LoggedIn',JSON.stringify({role:'admin'}))
    }
    else if(userData)
    {
      const employee = userData.employees?.find((e)=>email == e.email && password == e.password)

      if (employee) 
      { 
        setUser('employee') 
        localStorage.setItem('LoggedIn',JSON.stringify({role:'employee' , data: employee}))  
        setLoggedInData(employee)
      }
      else
      {
      alert('invalid credentials')
      }     
    }
    else
    {
      alert('invalid credentials')
    }
  }




  return (
    <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard changeUser = {setUser} />
    ) : ( user === 'employee' ?
      <EmployeDashboard changeUser = {setUser} data={LoggedInData}/> : null
    )}
    </>
  )
}

export default App
