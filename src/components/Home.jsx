// // // // import React from "react"

// // // // const Home = (props) =>{
// // // //     return<>
// // // //     <h1>Hello {props.value} Welcome to this site</h1>
// // // //     </>
// // // // }

// // // // export default Home

// // // // import React from "react";
// // // // import axios from "axios";

// // // // class Home extends React.Component{
// // // //     constructor(){
// // // //         super()
// // // //         this.state = {
// // // //             users: []
// // // //         }
// // // //         axios.get("https://api.github.com/users")
// // // //         .then((res) => this.setState({users: res.data}))
// // // //     }
// // // //    render(){
// // // //     return<>
// // // //     <p>This is a Userlist</p>
// // // //     {this.state.users.map((usr , index) => (
// // // //         <p key={index}>{usr.login + " "+ index}</p>
// // // //     ))}
// // // //     </>
// // // //    }
// // // // }

// // // // export default Home

// // // import React from "react";
// // // import axios from "axios";

// // // class Home extends React.Component{
// // //     constructor(){
// // //         super()
// // // this.state = {
// // //     users: [],
// // // }
// // // axios.get("https://api.github.com/users")
// // // .then((res) => this.setState({users: res.data}))
// // // .catch((error) =>  console.log(error))
// // //     }
// // //     render(){
// // //         return<>
// // //         <h1>This is a Userlist</h1>
// // //         <div className="flex flex-wrap gap-5 mt-10">
// // //         {this.state.users.map((usr , index) => (
// // // <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
// // //     <div className="flex justify-end px-4 pt-4">
// // //         <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
// // //             <span className="sr-only">Open dropdown</span>
// // //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
// // //                 <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
// // //             </svg>
// // //         </button>
// // //         <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
// // //             <ul className="py-2" aria-labelledby="dropdownButton">
// // //             <li>
// // //                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
// // //             </li>
// // //             <li>
// // //                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
// // //             </li>
// // //             <li>
// // //                 <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
// // //             </li>
// // //             </ul>
// // //         </div>
// // //     </div>
// // //     <div className="flex flex-col items-center pb-10">
// // //         <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={usr.avatar_url} alt="Image"/>
// // //         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{usr.login}</h5>
// // //         <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
// // //         <div className="flex mt-4 md:mt-6">
// // //             <a 
// // //             href={"https://github.com/" + usr.login}
// // //              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// // //                 Github Profile
// // //                 </a>
// // //             <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
// // //         </div>
// // //     </div>
// // // </div>
// // //         ))}
// // //         </div>
// // //         </>
// // //     }
// // // }

// // // import React from "react";

// // // const Home = (props) =>{
// // // return<>
// // // <h1 className="bg-orange-500">{props.value} Hello Everbody how r you doing this days.</h1>
// // // <ul>
// // // <h2 className="bg-purple-600"> <b>Good</b></h2>
// // // <h2 className="bg-pink-500"> <b>Better</b></h2>
// // // <h2 className="bg-red-600"><b>{props.value1}</b><b></b></h2>
// // // </ul>

// // // </>

// // // }

// // // import React from "react"

// // // const Home = () =>{

// // // const getData = (wq) =>{
// // //     console.log(wq.target.value)
// // // }
// // //     return<>
// // //     <h1>This is a Input box</h1>
// // //     <input type="text" onChange={getData} />
// // //     </>
// // // }

// // // export default Home

// // // import React, { useState } from "react"

// // // const Home = () => {
// // //     const [show , setshow] = useState(true)

// // //     return(
// // //     <div className="App">
// // //         {
// // //             show? <h1>Hello World!</h1>: null
// // //         }
// // // <button className="bg-orange-500"   onClick={() => setshow(!show)} >Toggle Button</button>
// // //     </div>
// // //     )
// // // }

// // // import React, { useState } from "react"

// // // const Home = () => {
// // // const[show , setshow] = useState(true)
// // //     return(
// // //     <div className="App" >
// // //     {
// // //         show? <h1>Hello world</h1> : null
// // //     }
// // //     <button onClick={() => setshow(!show)}  >Toggle</button>
// // //     </div>
// // //     )
// // // }

// // // export default Home
// // import React from "react"
// // function loginHandler(e)
// // {
// //     e.preventDefault()
// // }

// // const Home = () =>
// // {
// // return(<div>
// // <h1>Login Form</h1>
// // <form onSubmit={loginHandler}  >
// //     <input type="text" placeholder="Enter your name." />
// //     <br /><br />
// //     <input type="password" placeholder="Enter your password" /><br /><br />
// //     <button type="submit" >Login</button>
// // </form>
// // </div>)
// // }
// // export default Home


// import React, { useState } from "react";

// const Home = () => {
//     const[weight , setweight] = useState(0)
//     const[height , setheight] = useState(0)
//     const[bmi , setbmi] = useState("")
//     const [message , setmessage] = useState("")

//     const calbmi = (e) => {
//         e.preventDefault()
        
//         if(weight === 0 || height === 0)
//         {
//             console.log("please enter a valid height and weight")
//         }
//         else{
//             let bmi = (weight/(height*height)* 703)
//             setbmi(bmi.toFixed(1))
//         }
//     }

// if(bmi < 25)
// {
//     setmessage("You are overweight")
// }
// else if(bmi >= 25 && bmi < 30)
// {
//     setmessage("You are a Healthy person")
// }
// else{
//     setmessage("You are a Overweight person")
// }

// const reload = () => {
//     window.location.reload()
// }

//     return(
//         <div className="App">
//             <div className="container"  >
// <h2>BMI Calculator</h2>
// <form onSubmit={calbmi}  >
// <div>
//     <label htmlFor="">Weight (lbs)</label>
//     <input type="text" 
//     placeholder="Enter Weight here" 
//     value={weight}
//     onChange={(e) => setweight(e.target.value)}
//     />
// </div>
// <div>
//     <label htmlFor="">Height (ln)</label>
//     <input type="text" 
//     placeholder="Enter Height here" 
//     value={height} 
//     onChange={(e) => setheight(e.target.value)}
//     />
// </div>

// <div>
// <button className="btn" type="submit">Submit</button>
// <button className="btn btn-outline " onClick={reload} type="submit" >Reload</button>
// </div>

// <div className="center" >
// <h3>Your Bmi is: {bmi}</h3>
// <p>{message}</p>
// </div>

// </form>
//             </div>
//         </div>
//     )
// }
// export default Home

import React from "react";
import Peop from "./Peop";

const Home = (props) => {
    return(
    <>
    <h1 className="bg-orange-500 text-black p-4 rounded-xl"  >Tailwind test</h1>
< Peop/>
<Peop/>

    </>)
}
export default Home