import React from 'react'
import Taskbox from '../Components/Taskbox'
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((store)=>store.data)
    const load = useSelector((store)=>store.loading)
  return (
    <div>
        {
            load ? "Loading" : data?.map((ele,ind)=>
            <Taskbox ele={ele} key={ele.id}/>
            )
        }
    </div>
  )
}
