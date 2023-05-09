import { useState } from "react"

export default function Counter(){
    const [counter,setcounter]= useState(1)
    return <div>
        <button onClick={()=>{
            setcounter(counter+1)
        }}>+</button>
        <h6>{counter}</h6>
        <button onClick={()=>{
            if(counter!==1){
                setcounter(counter-1)
            } 
          
        }}>-</button>
    
    </div>
}