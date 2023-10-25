import { useState } from "react";

function Counter (){
    const [value , setvalue] = useState(0);
    return (
        
        <>
        <h1>Counter</h1>
        <span>{value}</span>
        <button onClick={()=>{setvalue(p=>p+1)}}>+</button>
        <button onClick={()=>{setvalue(p=>p-1)}} >-</button>
        </>
    );
}


export default Counter;