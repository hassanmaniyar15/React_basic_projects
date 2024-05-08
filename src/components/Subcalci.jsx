import React, { useState } from "react";

const Subcalci = () => {
const[num1 , setnum1] = useState(0)
const[num2 , setnum2] = useState(0)
const[Sub , setSub] = useState("")

const calcSum = (e) => {
    e.preventDefault()
    if(num1 === 0 || num2 === 0)
    {
        console.log("Please Enter either Num1 or Num2");
    }
    else{
        let Sub = parseInt(num1) - parseInt(num2)
        setSub(Sub)
    }
}

    return(
    <>
    <h1>Simple Calculator</h1>
<form onSubmit={calcSum}
className="max-w-sm mx-auto">
  <div className="mb-5">
    <label Htmlfor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number 1:</label>
    <input 
    type="Num1" 
    id="ema" 
    value={num1} onChange={(e) => setnum1(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="Number 1" 
     required 
     />
  </div>
  <div className="mb-5">
    <label Htmlfor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number 2:</label>
    <input 
    type="Num2" 
    id="pass" 
    value={num2} onChange={(e) => setnum2(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Number 2"
    required />
  </div>
  <div className="btn" type="submit">
    <h3>The value is: {Sub}</h3>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
    )
}
export default Subcalci