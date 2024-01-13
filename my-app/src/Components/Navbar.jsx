import React, { useState } from 'react'

export default function Navbar() {
    const [login,setLogin] = useState(false);

    const loginfnc = () =>{
        //
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
            <button>{
            login?"Logout":"Login"    
            }</button>
         </div>
    </div>
  )
}
