import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

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
            <div onClick={(()=>{navigate("/")})}>Home</div>
            <div onClick={(()=>{navigate("/add")})}>Add Task</div>
        </div>
         <div>
            <button onClick={loginfnc}>{
            login?"Logout":"Login"    
            }</button>
         </div>
    </div>
  )
}
