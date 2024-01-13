import React, { useState } from 'react'

export default function EditPage(ele) {

    const [title,setTitle] = useState("");
    const [notes,setNotes] = useState("");
    
 const EditTask = () =>{
    const editedTask = {
        title:title,
        notes:notes,
        status:ele.status
    }
    //Api Call                                
 }

  return (
    <form>
        <input type="text" value={ele.title} onChange={((e)=>{setTitle(e.target.value())})} />
        <input type="text" value={ele.notes} onChange={((e)=>{setNotes(e.target.value())})} />
        <input type="submit" value="Submit" onSubmit={EditTask()} />
    </form>
  )
}
