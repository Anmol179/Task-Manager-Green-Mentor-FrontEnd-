import React, { useState } from 'react'

export default function AddPage() {
    const [title,setTitle] = useState("");
    const [notes,setNotes] = useState("");


    const addTask = () =>{
        let new_task = {
            title:title,
            notes:notes,
            status:false
        }
        //Api call
    }

  return (
    <div>
        <form>
        <input type="text" placeholder='Title' onChange={((e)=>setTitle(e.target.value()))} required />
        <input type="text" placeholder='Notes' onChange={((e)=>setTitle(e.target.value()))} required />
        <input type="submit" value="Submit" onSubmit={addTask()} />
        </form>
    </div>
  )
}
