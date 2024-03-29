import React, { useEffect, useRef, useState } from "react";

 const useRefRender = () =>{
    const [input, setinput] = useState('');
    const count = useRef(0)
    

    useEffect=(()=>{
       count.current = count.current+1
    })
    return(
        <div>
            <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
            <h1>Render count:{count}</h1>
        </div>
    )

 }
 export default useRefRender;