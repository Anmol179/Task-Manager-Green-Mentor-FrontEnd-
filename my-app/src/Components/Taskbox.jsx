import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Taskbox(ele) {

    const navigate = useNavigate();


    const changeStatus = (status) =>{
        if(status){
            //Api Request
        }
        else{

        }
    }

    const deleteData = () =>{
        //Api request
    }


  return (
    <div>
        <h1>{ele.title}</h1>
        <p>{ele.note}</p>
        <h4 onClick={(()=>{changeStatus(ele.status)})}>Status:-{
            ele.status ? "Completed" : "Not Completed"     
        }</h4>
        <button onClick={(()=>{navigate(`/edit/:${ele.id}`)})}>Edit</button>
        <button onClick={(()=>deleteData(ele.id))}>Delete</button>
    </div>
  )
}
