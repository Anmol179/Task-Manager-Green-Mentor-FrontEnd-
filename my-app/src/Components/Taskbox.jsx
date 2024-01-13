import React from 'react'

export default function Taskbox(ele) {


    const changeStatus = (status) =>{
        if(status){
            
        }
        else{
            
        }
    }
  return (
    <div>
        <h1>{ele.name}</h1>
        <p>{ele.note}</p>
        <button onClick={(()=>{changeStatus(ele.status)})}>{
            ele.status ? "Completed" : "Not Completed"     
        }</button>
    </div>
  )
}
