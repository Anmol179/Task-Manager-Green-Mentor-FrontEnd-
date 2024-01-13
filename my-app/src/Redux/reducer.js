const Istate = {
    loading:false,
    error:false,
    data:[{
        id:1,
        title:"A",
        note:"B"
    },
{
    id:2,
    title:"D",
    note:"C"
}],
    simgleData:[]
}

export const reducer = (state=Istate,{type,payload}) =>{
    switch(type){
        case "GET_TASK_REQUEST" : return{
            ...state,
            loading:true,
            error:false
        }
        case "GET_TASK_SUCCESSS" : return{
            ...state,
            loaading:false,
            error:false,
            data:payload.data
        }
        case "GET_TASK_FAIL" : return{
            ...state,
            loading:false,
            error:true,
        }
        case "GET_STASK_REQUEST" : return{
            ...state,
            loading:true,
            error:false
        }
        case "GET_STASK_SUCCESSS" : return{
            ...state,
            loaading:false,
            error:false,
            simgleData:payload.data
        }
        case "GET_STASK_FAIL" : return{
            ...state,
            loading:false,
            error:true,
        }
        default:return{
            ...state
        }
    }
}