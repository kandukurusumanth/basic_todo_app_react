import { createSlice } from "@reduxjs/toolkit";

const taskslice = createSlice({
    name:'tasker',
    initialState:{
        task:[]
    },
    reducers:{
        additems:(state,action)=>{
            state.task.push(action.payload)
        },
        removeitems:(state,action)=>{
            state.task.splice(state.task.indexOf(action.payload),1)

        }
    }
})
export const {additems,removeitems} = taskslice.actions
export default taskslice.reducer