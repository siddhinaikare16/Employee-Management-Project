import { useState } from "react";


const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const SubmitHandler =  (e) => {
       e.preventDefault()
       handleLogin(email,password)
       console.log("form is submitted");
       console.log('email is',email);
       console.log('password is',password);
       
       setEmail("")
       setPassword("")
    }
  return (
    <div className="flex bg-emerald-200 text-black h-screen w-screen items-center justify-center ">

        <div className="border-2 bg-emerald-300 border-emerald-600 p-12 rounded-2xl">

        <form className="flex flex-col items-center justify-center">
        <input
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}   
        required type="email" className="font-xl border-emerald-600 rounded-full bg-transparent px-6 py-3 border-2 outline-none" placeholder="Enter your email"/>

        <input 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        required type="password" className="font-xl border-emerald-600 rounded-full bg-transparent px-6 py-3 border-2 mt-4 outline-none " placeholder="Enter your password" />

        <button className="font-xl bg-emerald-600 rounded-full px-6 py-2 mt-6 outline-none " 
        onClick={(e)=>{
            SubmitHandler(e)
        }}
        >Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login
