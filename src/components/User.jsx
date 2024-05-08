// // import { useEffect, useState } from "react"
// // import axios from "axios"
// // import { useParams } from "react-router-dom"


// // const User = () =>
// // {
// //   const params = useParams()
// //   const[userData , setData] = useState({})
// //   const[loading , setloading]= useState(true)

// // useEffect(() =>{
// // axios
// // .get(`https://api.github.com/users/${params.username}`)
// // .then((res) => {
// //     setData(res.data)
// //     setloading(false)
// // }).catch((err) => (console.log(err)))
// // }, [])

// // return (
// //   <div className="mt-7">
// //     {!loading && (
// //       <div>
// //         <p>Name: {userData.name}</p>
// //         {userData.company && <p>Company: {userData.company}</p>}
// //         {userData.location && <p>Location: {userData.location}</p>}
// //         <p>No. of Followers: {userData.followers}</p>
// //       </div>
// //     )}
// //     {loading && (
// //       <div role="status" className="max-w-sm animate-pulse">
// //         <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
// //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
// //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
// //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
// //         <span className="sr-only">Loading...</span>
// //       </div>
// //     )}
// //   </div>
// // );
// // }

// // export default User
// import axios from "axios"
// import { useState , useEffect } from "react"
// import { useParams } from "react-router-dom"

// const User = () =>{

//   const params = useParams()
//   const[userData , setData] = useState({})
//   const[loading , setloading] = useState(true)

// useEffect(() => {
// axios
// .get(`https://api.github.com/users/${params.username}`)
// .then((res) => {
//   setData(res.data)
//   setloading(false)
// })
// .catch((err) => console.log(err))

// }, [])

// return (
//   <div className="mt-7">
//     {!loading && (
//     <div className="p-10 text-white" >
//     <div className="px-4 sm:px-0">
//       <h3 className="text-base font-semibold leading-7">User Information</h3>
//       <p className="mt-1 max-w-2xl text-sm leading-6 ">Details & Information</p>
//     </div>
//     <div className="mt-6 border-t border-gray-100">
//       <dl className="divide-y divide-gray-100">
//         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//           <dt className="text-sm font-medium leading-6">Full name</dt>
//           <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
            
// <img className="w-10 h-10 rounded-full" src={userData.avatar_url} alt="Rounded avatar"/>

//             {userData.name}
//             </dd>
//         </div>
//         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//           <dt className="text-sm font-medium leading-6">Company</dt>
//           <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">{userData.company}</dd>
//         </div>
//         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//           <dt className="text-sm font-medium leading-6 ">Email address</dt>
//           <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">{userData.email || "NoEmail"}</dd>
//         </div>
//         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//           <dt className="text-sm font-medium leading-6 ">Location</dt>
//           <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">{userData.location}</dd>
//         </div>
//         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//           <dt className="text-sm font-medium leading-6">About
//           <p>No. of followers: {userData.followers}</p>
//           <p>No. of Public Repos: {userData.public_repos}</p>
//           <p>No. of Public Gist: {userData.public_gists}</p>
//           </dt>
        
//         </div>
//         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//           <dt className="text-sm font-medium leading-6 ">Attachments</dt>
//           <dd className="mt-2 text-sm  sm:col-span-2 sm:mt-0">
//             <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
//               <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
//                 <div className="flex w-0 flex-1 items-center">
//                   <svg className="h-5 w-5 flex-shrink-0 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
//                   </svg>
//                   <div className="ml-4 flex min-w-0 flex-1 gap-2">
//                     <span className="truncate font-medium">resume_back_end_developer.pdf</span>
//                     <span className="flex-shrink-0 ">2.4mb</span>
//                   </div>
//                 </div>
//                 <div className="ml-4 flex-shrink-0">
//                   <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
//                 </div>
//               </li>
//               <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
//                 <div className="flex w-0 flex-1 items-center">
//                   <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
//                   </svg>
//                   <div className="ml-4 flex min-w-0 flex-1 gap-2">
//                     <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
//                     <span className="flex-shrink-0 ">4.5mb</span>
//                   </div>
//                 </div>
//                 <div className="ml-4 flex-shrink-0">
//                   <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
//                 </div>
//               </li>
//             </ul>
//           </dd>
//         </div>
//       </dl>
//     </div>
//   </div>
  
//     )}
//     {loading && (
//       <div role="status" className="max-w-sm animate-pulse">
//         <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
//         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
//         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
//         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
//         <span className="sr-only">Loading...</span>
//       </div>
//     )}
//   </div>
// );
// };
// export default User;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const params = useParams();
  const [userData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.username}`)
      .then((res) => {
        // setTimeout(() => {
        setData(res.data);
        setLoading(false);
        // }, 3000);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-7">
      {!loading && (
        <div>
         <div>
  <div className="px-4 sm:px-0">
    <h3 className="text-base font-semibold leading-7 ">User Information</h3>
    <p className="mt-1 max-w-2xl text-sm leading-6 ">Personal details and application.</p>
  </div>
  <div className="mt-6 border-t">
    <dl className="divide-y">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">Full name</dt>
        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">     
<img className ="w-10 h-10 p-1 rounded-full ring-2" src={userData.avatar_url} alt="Bordered avatar" />
          {userData.name}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">Company</dt>
        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">{userData.company}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">Email address</dt>
        <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">{userData.email || "No Email"}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">Location</dt>
        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">{userData.location}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">About</dt>
        <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
           <p>No. of followers: {userData.followers}</p>
           </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">Attachments</dt>
        <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
          <ul role="list" className="divide-yrounded-md border ">
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                  <span className="flex-shrink-0">2.4mb</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                  <span className="flex-shrink-0 ">4.5mb</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>

        </div>
      )}
      {loading && (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default User;