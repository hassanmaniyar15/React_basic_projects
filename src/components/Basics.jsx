// // // // import axios from "axios";
// //  import React, { useState } from "react";

// // // // const Basics = () => {
// // // // const[users , setUsers] = useState([])
// // // //     const getUser = async() => {
// // // //         const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
// // // //         setUsers(data)
// // // //     }
// // // // getUser()
// // // //     return(
// // // //         <>
// // // //         <button onClick={getUser}  className="bg-purple-800 text-black px-2 py-2 rounded font-bold">Get Data</button>
// // // //         <div className="p-8 bg-slate-400 mt-5  "  >
// // // //             <ul>
// // // //             {users.map((e) => {
// // // //     return<li>{e.username}</li>
// // // // })}
// // // //             </ul>
// // // //         </div>
// // // //         </>
// // // //     )
// // // // }

// // // // export default Basics

// // // // Calculator used by multiplication method
// // // import React, { useState } from "react";

// // const Calculator = () => {
// //     const[num1 , setnum1] = useState(0)
// // const[num2 ,setnum2] = useState(0)
// // const[mult , setmult] = useState("")


// // const calcSum = (e) => {
// //     e.preventDefault()
// //     if(num1 === 0 || num2 === 0)
// //     {
// //         console.log("Please enter either num 1 or num2");
// //     }
// //     else {
// //         let mult = num1 * num2
// //         setmult(mult)
// //     }
// // }

// // return (
// // <>
// // <h1>Simple Calculator</h1>

// // <form onSubmit={calcSum}
// // className="max-w-sm mx-auto">
// //   <div className="mb-5">
// //     <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number 1: </label>
// //     <input
// //      type="num1" 
// //      id="email" 
// //      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
// //      placeholder="Please Enter Num 1:" 
// //      value={num1}
// //      onChange={(e) => setnum1(e.target.value)}
// //      required 
// //      />
// //   </div>
// //   <div className="mb-5">
// //     <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number 2: </label>
// //     <input 
// //     type="num2"
// //      id="password" 
// //      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
// //      placeholder="Please Enter Num 2:"
// //      value={num2}
// //      onChange={(e) => setnum2(e.target.value)}
// //      required 
// //      />
// //   </div>
// //   <div>Your Sum is:{mult}</div>
// //   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// // </form>
// // </>
// // )
// // }
// // export default Calculator

import React from "react";
import axios from "axios";
import Basicscard from "./Basicscard";

class Userlist extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
        }
        axios.get("https://api.github.com/users").then((res) => this.setState({users : res.data}))
    
    }
    render(){
        return(
        <>
        <h4>This is a Userlist</h4>
        <div className="flex flex-wrap gap-5 mt-4 " >
        {this.state.users.map((usr ,index) => (
  <Basicscard key={index} usr = {usr} />
  ))}
        </div> 
        </>
        )
    }
}

export default Userlist
