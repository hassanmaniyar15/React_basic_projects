// import Home from './components/Home'
// import './App.css'
// import Name from './components/Name'
// import Language from './components/Language'
// import Counter from './components/Counter'
// import Userlist from './components/Userlist'
// import {Route, Routes, Link } from 'react-router-dom'
// import Notfound from './components/Notfound'
// import Count from './components/Count'
// import Contact from './components/Contact'
// import User from './components/User'
// import { useState } from 'react'
// import { UserContext } from './components/Usercontext'
// import Eform from './components/Eform'
// import Reform from './components/Reform'

// function App() {
// const[a, setA] = useState(10)

// return(
//   <>

// <UserContext.Provider value = {{a, setA}} >
// <nav className="bg-white border-gray-200 dark:bg-gray-900">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <Link 
//           to="/" 
//           className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
//             Home
//             </Link>
//         </li>
//         <li>
//           <a href="/users" 
//           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
//             About
//             </a>
//         </li>
//         <li>
//           <a 
//           href="/products" 
//           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
//           Services
//             </a>
//         </li>
//         <li>
//           <a 
//           href="/count" 
//           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
//             Pricing
//             </a>
//         </li>
//         <li>
//           <Link
//          to="/form" 
//           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
//             Contact
//             </Link>
//         </li>
//         <li>
//           <Link
//          to="/Eform" 
//           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
//             Details
//             </Link>
//         </li>
//         <li>
//           <Link
//          to="/Reform" 
//           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
//             Reform
//             </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// <Routes>
//   <Route path = "/" element = {<Home/>}/>
//   <Route path = "/users" element = {<Userlist />}  />
//   <Route path = "/users/:username" exact element = {<User/>}/>
//   <Route path = "*" element = {<Notfound/>}  />
//   <Route path= "/count" element = {<Count count={1} value={1}  />} />
//   <Route path = "form" element = {<Contact/>}/>
//   <Route path = "/Eform" exact element = {<Eform/>}/>
//   <Route path = "/Reform" exact element = {<Reform/>}  />
// </Routes>
// </UserContext.Provider>
//   </>
// )
// }

// export default App
import Home from "./components/Home";
import "./App.css"
import { Route, Routes, Link } from "react-router-dom";
import Name from "./components/Name";
import Language from "./components/Language";
import Userlist from "./components/Userlist";

import Notfound from "./components/Notfound";
import Contact from "./components/Contact";
import Count from "./components/Count";
import User from "./components/User";
import { useState } from 'react'
import { UserContext } from "./components/UserContext";
import Counter from "./components/Counter";
import Todolist from "./components/Todolist";
import Bmi from "./components/Bmi";
import BgChanger from "./components/BgChangerProj";
import Pwdgeneratorapp from "./components/Pwdgeneratorapp";
import CurrencyConvertor from "./components/CurrencyConvertor";
import WebPg from "./components/WebPg";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact1 from "./components/Contact1";
import User1 from "./components/User1";
import Github from "./components/Github";
import Themechg from "./components/Themechg";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Hform from "./components/Hform";
import Calculator from "./components/Calculator";
import Subcalci from "./components/Subcalci";
import Age from "./components/Age";
import Docsmini from "./components/Docsmini";
import Basic from "./components/Basics";




function App(){

  const[a , setA] = useState(10)
  return (
  <>
  <UserContext.Provider value={{a , setA}}>
  <nav>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link 
           to="/" 
           className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
             Home
             </Link>       
        </li>
        <li>
         <Link
          to="/users" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            About
         </Link>
        </li>
        <li>
          <Link
          to="/todo" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Services
            </Link>
        </li>
        <li>
          <Link
          to="/bmi" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            BMI
            </Link>
        </li>
        <li>
          <Link
          to="/bg" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
           BgChanger
            </Link>
        </li>
        <li>
          <Link
          to="/count" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Counter
            </Link>
        </li>
        <li>
          <Link
          to="/counter" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Pricing
            </Link>
        </li>
     <li>
     <Link
          to="/contact" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Contact Us
         </Link>
     </li>
     <li>
     <Link
          to="/pwd" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Pwd Generator
         </Link>
     </li>
     <li>
     <Link
          to="/con" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Currency Convertor
         </Link>
     </li>
      <li>
     <Link
          to="/webPage" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            mini webpage
         </Link>
     </li> 
     <li>
     <Link
          to="/thm" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
           Theme Changer
         </Link>
     </li> 
     <li>
     <Link
          to="/hform" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Hform
         </Link>
     </li> 
     <li>
     <Link
          to="/thmswitch" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
           Theme Switcher
         </Link>
     </li> 
     <li>
     <Link
          to="/cal" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
         Calculator
         </Link>
     </li> 
     <li>
     <Link
          to="/subcal" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
         SubCalculator
         </Link>
     </li>
     <li>
     <Link
          to="/doc" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
         Age Calculator
         </Link>
     </li>
     <li>
     <Link
          to="/doc" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
         Docs mini
         </Link>
     </li>
     <li>
     <Link
          to="/bas" 
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        Basis Brushup
         </Link>
     </li>
      </ul>
    </div>
  </div>
</nav>

  </nav>
<Routes>
  <Route path="/bas" element = {<Basic val= {"Not true"} />} />
  <Route path="/doc" element = {<Docsmini/>}/>
  <Route path="/age" element = {<Age/>}/>
  <Route path = "/subcal" element = {<Subcalci/>}/>
  <Route path = "/cal" element = {<Calculator/>}  />
  <Route path = "/hform" element = {<Hform/>}/>
  <Route path="/thmswitch" element = {<ThemeSwitcher/>}  />
  <Route path="/thm" element = {<Themechg/>}  />
  <Route path="/github" element = {<Github/>} />
  <Route path= "/user1/:userid" element = {<User1/>}/>
  <Route path = "/about" element = {<About/>} />
  <Route path = "/contact1" element = {<Contact1/>} />
  <Route path="/lay" element = {<Layout/>}  />
  <Route path="/webPage" element= {<WebPg/>} />
<Route path="/con" element= {<CurrencyConvertor/>}/>
<Route path = "/bg" element= {<BgChanger/>}/>
   <Route path="/bmi" element= {<Bmi/>}/> 
   <Route path="/pwd" element= {<Pwdgeneratorapp/>}/> 
   <Route path = "/" element= {<Home value={"Maniyar"} />}/>
  <Route path = "/contact" element = {<Contact/>}/>
  <Route path = "/todo" element = {<Todolist/>}/>
  <Route path = "/counter" element = {<Counter/>}/>
  <Route path = "/count" element = {<Count />}/>
  <Route path="/users" element= {<Userlist/>}/>
  <Route path = "/users/:username" element={<User/>} />
  <Route path="*" exact element = {<Notfound/>}/>
</Routes>
</UserContext.Provider>
  </>
  )
}
//to be continued from 31th october 

export default App

