import { useContext,  useEffect,  useState } from "react"
import Login from "./Components/Auth/Login"
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import { AuthContext } from "./Context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null)
  //these are the boxes which will remember who logged in => admin , employee , null

  const [LoggedInData, setLoggedInData] = useState(null)
  //these are the boxes which will remember the complete record of the logged in person(it can be admin OR employee)
  
  const [userData , setUserData] = useContext(AuthContext)
  //these are the boxes which will hold the complete dataset from the local storage file , to check the logged in person credentials . set user data is empty because we need not to change the data , we just need to see it 
  
  useEffect(()=>{
    const LoggedIn= localStorage.getItem('LoggedIn')
    // goes into the local storage and finds out if there is a note named as LoggedIn under the employye/admin name
    if (LoggedIn) {  
      //if the note is found then call this function , IF NOT , then keep the user at login page
      const savedLogin = JSON.parse(LoggedIn)  
      //converts the JSON string into object , to the data can be accssed/used ,AND that object is now stored in a variable named savedLogin
      setUser(savedLogin.role)
      //the user box which was empty before is now filled with its role , from the data we go from savedLogin Variable
      setLoggedInData(savedLogin.data)
      //we also got the complete data of that person 
    }
  },[])
//useEffect function is used so , bcz once u reload the page those 3 boxes data will be vanished !! AND YOU HAVE TO LOGIN EVERYTIMEEE
//its not just the useeffect , the statements inside it is which plays the role to fill those boxes everytime you RELOAD


  const handleLogin = (email,password) => 
    //WHO calls this function ?? => obv login page 
    {
    if (email == 'admin@example.com' && password == '123') 
      // this if function is for admin check , admin credentials are checked directly 
    {
      setUser('admin')
      //if email and password matches , set the the user role as admin
      setLoggedInData({role:'admin'})
      //fill this data 
      localStorage.setItem('LoggedIn',JSON.stringify({role:'admin'}))
      //as local storage cannot keep the data in objct format so need to stringify it .
      // now local storage will keep data in text format which we called as NOTE 
    }
    else if(userData)
    // now if the user is not admin , then it should be employee , so before checking is it employee , we need to see wether userData is loaded , thats why this else if.
  //now once the user data is loaded we will see is it a valid employee
    {
      const employee = userData.employees?.find((e)=>email == e.email && password == e.password)
      //1.goes into employee section of local storage and finds is there employee
      //2.checks the email and password 

      if (employee) 
      // if for above statement its true the , this if fuc'n
      { 
        setUser('employee') 
        //sets the role as employee
        localStorage.setItem('LoggedIn',JSON.stringify({role:'employee' , data: employee}))  
        //adds the NOTE in TEXT format
        setLoggedInData(employee)
        //sets all the data of the employee
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
    //this is the part which will be deciding which screen user will see
    <>
    {/* used for invisible wrapper */}

    {!user ? (
      // this says if user is not logged in guide it to the login page
      <Login handleLogin={handleLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard changeUser = {setUser} />
      // if user is admin guide it to the admin page 
      //changeUser is a prop (like a tool which teacher gives it to its student) 
      //in change user setUser is passed , so that when admin presses logout button on admin dashboard , User variable will be set to null again which we call as CALLBACK PROPS
    ) : ( user === 'employee' ?
      <EmployeDashboard changeUser = {setUser} data={LoggedInData}/> : null
      //if it a employee , guide it to employee dashboard 
      //changeUser is a prop
      //setUser is send bcz , when user will logut from dashboard , user will be set to null again

      //data is also a prop
      //LoggedInData is passed to provide complete record , to the employee
    )}
  
    </>
  )
}

export default App
