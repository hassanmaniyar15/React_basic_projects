import React, { useState } from "react";

const Calculator = () =>{

const [num1 , setNum1] = useState(0)
const [num2 , setNum2] = useState(0)
const[Add, setAdd] = useState("")

const calcSum = (e) => {
e.preventDefault()
if(num1 === 0 || num2 === 0)
{
    console.log("Please enter your Num1 or Num2");
}
else{
    let Add = parseInt(num1) + parseInt(num2)
    setAdd(parseInt(Add))
}
}


    return(
   <>
   <h1>Simple Calculator</h1>
<form onSubmit={calcSum}
 className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
    <input 
    type="text" 
    id="Num1" 
    value={num1} onChange={(e) => setNum1(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Enter Value 1:" 
    required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
    <input
     type="text" 
     id="abc" 
     value={num2} onChange={(e) => setNum2(e.target.value)}
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="Enter Value 2:"
     required 
     />
  </div>
  <div className="btn" type="submit"  >
    <h3>Your Sum is:{Add}</h3>
</div>
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

   </>
    )
}

export default Calculator

// import React, { useState } from "react";
// const[a , b] = useState(false)


// const Calculator = () => {
//   return(
//   <div className="text-white w-full h-60 bg-zinc-600" >
//   <h4 className={`${a === "false" ? "text-red-600" : "text-blue-700"}`}>{ a === "false" ? "hello" : "hey"}</h4>
//   <button>Click</button>
//   </div>
//   )
// }

// export default Calculator