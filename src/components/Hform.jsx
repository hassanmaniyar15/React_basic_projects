// import React, { useState } from "react";

// const Hform = () => {
//     const[state , setstate] = useState({
//         email: "",
//         file: null,
//         mobile: "",
//         name: "",
//     })

//     const handleInput = (e) => {
//      e.target.name === "file"
//      ?setstate((...prev) => ({...prev , file: e.target.file[0]}))
//      :setstate((...prev) => {
//         return{...prev , [e.target.name]: e.target.value}
//      })
//     }

//     const SubmitForm = (e) => {
//         e.preventDefault()
//         console.log(state);
//     }

//     return(
//         <>
// <form className="max-w-md mx-auto">
//   <div className="relative z-0 w-full mb-5 group">
//       <input 
//       type="email" 
//       value={state.email}
//       name="email" 
//       id="floating_email" 
//       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//       placeholder=" " 
//       onChange={(e) => handleInput(e)}
//       required
//        />
//       <label HtmlHtmlfor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//   </div>
  
 
// <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" Htmlfor="file_input">Upload file</label>
// <input 
// className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//  id="file_input" 
//  type="file"
//  onChange={(e) => handleInput(e)}
//  />

//   <div className="grid md:grid-cols-2 md:gap-6">
//     <div className="relative z-0 w-full mb-5 group">
//         <input 
//         type="text" 
//         value={state.name}
//         name="floating_first_name" 
//         id="floating_first_name" 
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//         placeholder=" " 
//         onChange={(e) => handleInput(e)}
//         required
//          />
//         <label HtmlHtmlfor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//     </div>
   
//   </div>
//   <div className="grid md:grid-cols-2 md:gap-6">
//     <div className="relative z-0 w-full mb-5 group">
//         <input 
//         type="tel" 
//         value={state.mobile}
//         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
//         name="mobile" 
//         id="floating_phone" 
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//         placeholder=" " 
//         onChange={(e) => handleInput(e)}
//         required 
//         />
//         <label HtmlHtmlfor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
//     </div>
    
//   </div>
//   <button 
//   type="submit" 
//   onClick={SubmitForm}
//   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//     Submit
//     </button>
// </form>

//         </>
//     )
// }
// export default Hform

import React, { useState } from "react";
const[email , setemail] = useState("")
const[password , setpassword] = useState("")

const Form = () => {
    return(
<form 
className=" mt-5  max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="email" 
      name="floating_email" 
      id="floating_email" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" "
      value={email}
      required 
      onChange={(e) => setemail(e.target.value)}
       />
      <label Htmlfor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="password" 
      name="floating_password"
       id="floating_password" 
       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
       placeholder=" " 
       value={password}
       required 
       onChange={(e) => setpassword(e.target.value)}
       />
      <label Htmlfor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    )
}

export default Form