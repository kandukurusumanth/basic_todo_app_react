import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import Store from "./Store";
import { additems, removeitems } from "./slice";
const Taskcreater = ()=>{
    const task = prompt('enter the task')
    return task
}

const Ano= ({data })=>{
    const dispatch = useDispatch()
    return (
       
           <>
                <div>
                    <li >{data}</li>
                    <button onClick={()=>{
                        dispatch(removeitems({data}))
                    }}>delete

                    </button>
                </div>
           </>
    );
} 
const App =()=>{
    const [taskman, settaskman] = useState(false)
    const selector = useSelector((state)=> state.tasker.task)
    const dispatch = useDispatch();
    const excute = ()=>{
        
        settaskman(!taskman)
        const ans = Taskcreater();
        dispatch(additems(ans))
        

    }
    return(
        <>  
            <button onClick={excute}>Add the task</button>
            
            <ul>
                {selector.map((ele,ind)=>{
                        return <Ano key={ind} data={ele} />
                })}

            </ul>
              
            
            
        </>
        
    )
}
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
<Provider store={Store}>
<App />
</Provider>)
