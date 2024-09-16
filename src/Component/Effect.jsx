import { useEffect, useState } from "react";


function Effect() {
 const [count, setCount] = useState(1);

    useEffect(()=>{
        const timer = setInterval (()=>{
            alert ("Effect")
        }, 10000);

       return ()=> {
        clearInterval(timer)
    };
 }, [count]);

    

    return ( <>
       <h1>Effect</h1>
        <p role="button" onClick={()=>setCount((prev) => prev + 1)}>count{count}</p> 
    </> );
}

export default Effect;