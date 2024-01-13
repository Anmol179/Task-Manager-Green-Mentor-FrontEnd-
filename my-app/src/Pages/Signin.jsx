import React, { useState } from 'react'

export default function Signin(login,setLogin) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginUser = () =>{
        setLogin(true);
        const user = {
            email:email,
            password:password
        }
        //Api Call
    }

  return (
    <div>
        <h1>Sign In</h1>
    <form>
        <input type="text" placeholder='E-mail' onChange={((e)=>setEmail(e.target.value))} required/>
        <input type="password" placeholder='Enter Password' required onChange={((e)=>setPassword(e.target.value))} />
        <input type="submit" value={"Submit"} onSubmit={loginUser()} />
    </form>
    <p>dont have an Account? <span>Click Here</span></p>
    </div>
  )
}
