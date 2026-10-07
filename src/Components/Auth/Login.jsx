import { useState } from "react";

const Login = ({handleLogin}) => {
  //{handleLogin} open the props and take out the handle login fnction
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const SubmitHandler =  (e) => {
       e.preventDefault()
       //preventing from reloading the site
       handleLogin(email,password)
       //goes inside the app.jsx for checking email and password and filling the user and data bioxes 
       console.log("form is submitted");
      //  console.log('email is',email);
      //  console.log('password is',password);
       
       setEmail("")
       setPassword("")
    }
  return (
    <div className="flex bg-emerald-200 text-black h-screen w-screen items-center justify-center ">

        <div className="border-2 bg-emerald-300 border-emerald-600 p-12 rounded-2xl">

        <form className="flex flex-col items-center justify-center" 
          onSubmit={(e)=>{
            SubmitHandler(e)
        }}>
        <input
        value={email}
        //shows the only which is inside the email box
        onChange={(e)=>{
          setEmail(e.target.value)
          //It runs every time the person types one letter. e is the event, the "what just happened" report. e.target.value
          //Person types "a" → onChange runs → setEmail("a")
          // → box now holds "a" → value={email} shows "a"

          //The input shows only what the box says, and the box changes only when onChange tells it to. This is called a controlled input: React controls what's inside it.
        }}   
        required type="email" className="font-xl border-emerald-600 rounded-full bg-transparent px-6 py-3 border-2 outline-none" placeholder="Enter your email"/>

        <input 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        required type="password" className="font-xl border-emerald-600 rounded-full bg-transparent px-6 py-3 border-2 mt-4 outline-none " placeholder="Enter your password" />

        <button className="font-xl bg-emerald-600 rounded-full px-6 py-2 mt-6 outline-none " 
        >Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login


// NOTE THE CHANGES
// submit handler should added to the form , not to the button , bcz the required type="email"/"password" does NOT work
