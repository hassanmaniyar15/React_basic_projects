// // import { useState } from "react"

// // import { useState } from "react"

// // const Contact = () =>
// // {
// // // const[email , setemail] = useState("")
// // // const[password , setpassword] = useState("")
// // const [state , setstate] = useState({
// // email: " ",
// // password: " "

// // })

// //     return(
// //         <form className="max-w-md mx-auto">
// //   <div className="relative z-0 w-full mb-5 group">
// //       <input 
// //       type="email" 
// //       name="floating_email" 
// //       id="floating_email" 
// //       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
// //       placeholder=" " 
// //       required
// //       value = {state.email}
// //       onChange={(e) => {
// //         setstate({ ...state, email: e.target.value });
// //         console.log(state);
// //       }}
// //       />
// //       <label htmlHtmlHtmlfor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
// //   </div>
// //   <div className="relative z-0 w-full mb-5 group">
// //       <input 
// //       type="password" 
// //       name="floating_password" 
// //       id="floating_password" 
// //       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
// //       placeholder=" " 
// //       value={state.password}
// //       required 
// //       onChange={(e) =>{
// //         setstate({...state, password: e.target.value})
// //         console.log(state)
// //       }}
// //       />
// //       <label htmlHtmlHtmlfor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
// //   </div>
  
  
// //   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// // </form>
// //     )    
// // }
// // export default Contact

// import { useState } from "react"

// const Contact = () =>{
//     // const[email , setemail] = useState("")
//     // const[password , setpassword] = useState("")
// const[state , setstate] = useState({
// email: " ",
// password: " ",
// })

// return<>
    
// <form className="mt-5">
//   <div className="relative z-0 w-full mb-5 group">
//       <input 
//       type="email" 
//       name="floating_email" 
//       id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//       placeholder=" " 
//       value={state.email}
//       required 
//       onChange={(e) => {
//         setstate({...state , email: e.target.value})
//         console.log(state)
//        }}
//       />
//       <label Htmlfor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//   </div>
//   <div className="relative z-0 w-full mb-5 group">
//       <input 
//       type="password" 
//       name="floating_password" 
//       id="floating_password" 
//       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//       placeholder=" " 
//       value={state.password}
//       required 
//       onChange={(e) => {
//         setstate({...state , password: e.target.value})
//     console.log(state)
//     }}
//       />
//       <label Htmlfor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//   </div>
 
 
//   <button type="button" 
//   onClick={() => console.log(state) }
//   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//     Submit
//     </button>
// </form>
// </>
// }

// export default Contact

import React, { useState } from "react";

const Contact = () =>{
// const[email , setemail] = useState("")
const[state , setstate] = useState({
  email: " ",
  password: " ",
  firstname: " ",
  lastname: " ",
  phonenumber: " ",
  company: " ",
})

return<>
<form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input 
      type="email" 
      name="floating_email" 
      id="floating_email" 
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" " 
      value={state.email}
      required
      onChange={(e) => 
       {
setstate({...state, email: e.target.value})
console.log(state)
       }       
      }
       />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input
       type="password" 
       name="floating_password" 
       id="floating_password" 
       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
       placeholder=" " 
       value={state.password}
       required 
       onChange={(e) => {
        setstate({...state , password: e.target.value})
        console.log(state)
       }}
       />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input 
        type="text" 
        name="floating_first_name" 
        id="floating_first_name" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
         placeholder=" " 
         value={state.firstname}
         required 
         onChange={(e) => {
          setstate({...state , firstname: e.target.value})
          console.log(state)
         }}
         />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input 
        type="text" 
        name="floating_last_name" 
        id="floating_last_name" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        value={state.lastname}
        required
        onChange={(e) => {
          setstate({...state , lastname: e.target.value})
          console.log(state)
         }}
         />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input 
        type="tel" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        name="floating_phone" 
        id="floating_phone" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        value={state.phonenumber}
        required
        onChange={(e) => {
          setstate({...state , phonenumber: e.target.value})
          console.log(state)
         }}
         />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input 
        type="text" 
        name="floating_company" 
        id="floating_company"
         class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
         placeholder=" " 
         value={state.company}
         required
         onChange={(e) => {
          setstate({...state , company: e.target.value})
          console.log(state)
         }}
          />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button 
  type="button" 
  onClick={() => console.log(state)}
  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Submit</button>
</form>
</>
}

export default Contact