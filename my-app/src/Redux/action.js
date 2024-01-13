import {axios} from "axios";
import { GET_STASK_FAIL, GET_STASK_REQUEST, GET_STASK_SUCCESSS } from "./actiontype";

export const getTask = async(dispatch) =>{
    dispatch(getTaskReq());
    try{
        let res = await axios.get("//")
        dispatch(getTaskSucc(res));
    }catch(error){
        console.log(error);
        dispatch(getTaskFail());
    }
}

export const getSTask = async(dispatch) =>{
    dispatch(getSTaskReq());
    try{
        let res = await axios.get("//")
        dispatch(getSTaskSucc(res));
    }catch(error){
        console.log(error);
        dispatch(getSTaskFail());
    }
}

export const getTaskReq  = () =>{
    return{type:GET_STASK_REQUEST}
}
export const getTaskSucc = (value) =>{
    return{tyre:GET_STASK_SUCCESSS,payload:value}
}
export const getTaskFail =  () => {
    return{type:GET_STASK_FAIL}
}

export const getSTaskReq = () =>{
    return{type:GET_STASK_REQUEST}
}
export const getSTaskSucc = (value) => {
    return{type:GET_STASK_SUCCESSS,payload:value}
}
export const getSTaskFail = () =>{
    return{type:GET_STASK_FAIL}
}