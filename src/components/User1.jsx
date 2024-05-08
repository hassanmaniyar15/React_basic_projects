import React from "react";
import { useParams } from "react-router-dom";

const User1 = () => 
{
    const{userid} = useParams()
return(
<div className="bg-gray-800 text-white text-3xl p-4 "  >User1: {userid}</div>
)
}
export default User1