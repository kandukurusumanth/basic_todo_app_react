import { configureStore } from "@reduxjs/toolkit";
import taskslice from './slice'
const Store = configureStore({
    reducer:{
        tasker:taskslice
    }
})
export default Store