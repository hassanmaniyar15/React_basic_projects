import React from "react";

const Language = () =>{
    const lang = ["English" , "Urdu", "Hindi", "Tamil", "Telugu"]

    return(
        <>
        <h2 className= " bg-orange-500 " >Languages Available</h2>
         {lang.map((ln , index)=>(
<p className="bg-blue-600"   key={index}>{ln + ", "+ index}</p>
    )
    )}
        </>
    )
   //to be continued from 18 october
}
export default Language