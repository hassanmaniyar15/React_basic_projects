// // // import { useState, useEffect } from "react";

// // // const Count = (props) => {
// // //   const [count, setCount] = useState(props.count);
// // //   const [value, setValue] = useState(1);

// // //   const dec = () => {
// // //     setCount(count - 1);
// // //   };

// // //   const inc = () => {
// // //     setCount(count + 1);
// // //   };

// // //   useEffect(() => {
// // //     console.log("In useEffect");
// // //   }, [count]);
// // //   return (
// // //     <>
// // //       {console.log("render")}
// // //       <p className="mt-5">This is a Counter</p>
// // //       <div className="flex items-center justify-center gap-3 my-4">
// // //         <button onClick={dec}>-</button>
// // //         <p>{count}</p>
// // //         <button onClick={inc}>+</button>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Count;

// // import { useState, useEffect } from "react"

// // const Count = (props) =>{
// // const[count , setCount] = useState(props.count)
// // const[value , setValue] = useState(1)


// // const dec = () =>{
// //   setCount(count - 1)
// // }

// // const inc = () =>{
// //   setCount(count + 1)
// // }

// // useEffect(() =>{
// // console.log("In useEffect")
// // }, [])

// //   return(<>
// //         <p className="mt-5">This is a Counter</p>
// //         <div className="flex items-center justify-center gap-3 my-4">
// //         <button onClick={dec}>-</button>
// //         <p>{count}</p>
// //         <button onClick={inc}>+</button>
// //         </div>
// //         </>
// //   )
// // }

// // export default Count

// import React, { useState } from "react";

// const Count = () =>{
// const[count, setCount] = useState(0)

// const dec = () =>{
//   setCount(count - 1)
// }

// const inc = () =>{
//   setCount(count + 1)
// }

// return<>
// <p className="mt-5" >This is a Counter</p>
// <div className="flex items-center justify-center gap-3 my-4">
//   <button onClick={dec}>-</button>
//   <p>{count}</p>
//   <button onClick={inc}>+</button>
// </div>
// </>
// }

// export default Count

// import React, { useState } from "react";

// const Count = () => {
// const[count , setCount] = useState(0)

// const dec = () => {
//   if(count > 0)
//   {
//     setCount(count - 1)
//   } 
// }

// const inc = () => {
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
//   setCount(prevcount => prevcount + 1)
// }


//   return(
//     <>
//     <p className="mt-5"  >This is a Counter</p>
//     <div className="flex items-center justify-center gap-3 my-2  ">
//       <button className="bg-red-600" onClick={dec}> Decrement</button>
//       <p>{count}</p>
//       <button className="bg-green-500"  onClick={inc}>Increment</button>
//     </div>
//     </>
//   )
// }

// export default Count

import React, { useEffect, useState } from "react";

const Count = () => {
  const[count , setcount] = useState(0)

  const inc = () => {
setcount(count + 1)
  }
  const dec = () => {
    if(count > 0)
      {
        setcount(count - 1)
      }
  }

useEffect(() => {
console.log("In Effect");
}, [])

return(
<>
<p>This is a Counter</p>
<div className="flex items-center justify-center gap-3 my-4">
  <button className="bg-green-500"   onClick={inc}>Increment</button>
  <p>{count}</p>
  <button className="bg-red-600"   onClick={dec}>Decrement</button>
</div>
</>
)
}

export default Count
