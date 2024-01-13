import React, { useState } from 'react'

export default function Navbar() {
    const [login,setLogin] = useState(false);

    const loginfnc = () =>{
        if(login){
          setLogin(false);
        }
        else{
          setLogin(true);
        }
    }
  return (
    <div>
        <div>
            Task Manager
        </div>
        <div>
            <div>Home</div>
            <div>Add Task</div>
        </div>
         <div>
            <button onClick={loginfnc}>{
            login?"Logout":"Login"    
            }</button>
         </div>
    </div>
  )
}
