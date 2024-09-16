import { useState } from "react";
import Input from "./Input";

function State() {
const [scores, setScores] = useState ({
    Maths: null,
    English : null,
    Physics : null,
    Biology : null,
  });

  const [show, setShow] = useState(true)

  const [total, setTotal] = useState(null)

const handleChange = (e)=>{
  const {name, value} = e.target;
  setScores ((prev)=>{
    return {...prev, [name]: Number(value)};
  });

};

const handleSubmit =(e)=>{
  e.preventDefault()
const result = Object.values(scores).reduce((a,b)=>a+b)
setTotal(result)

};


    return ( 
        <>
         <form className="w-full bg-purple-400 max-w-[300px] mx-auto rounded-md 
         space-y-2 pt-3 mt-3" onSubmit={handleSubmit} >
  <Input name="Math" handleChange={handleChange} />
  <Input name="English" handleChange={handleChange} />
  <Input name="Physics" handleChange={handleChange}/>
  <Input name="Biology" handleChange={handleChange} />
  

  <button className="block mx-auto p-3 bg-green-500 border-2 mb-4 text-white
   hover:bg-green-200">Submit</button>
     <div className=""><h2 className="text-center bg-black text-white " onClick={handleSubmit} >Total score is {total}/400</h2>
    <p className="text-center ">{total >  200 ? "congrats" : "fail"}</p>
    </div>
    </form>
    {/* <div className=""><h2 className="text-center" >Total score is {total}/400</h2>
    <p className="text-center">{total >  200 ? "congrats" : "fail"}</p>
    </div> */}
       
        </>
     );
}

export default State ;