import React from "react";

const Header123 = (props) => {
    return(
    <div className="h-16 bg-orange-300 flex items-center justify-between">
   <h2>{props.user}</h2>
   <div className="flex gap-5"  >
    <h4>Home</h4>
    <h4>About</h4>
    <h4>Contact Us</h4>
    <h4>{props.editor}</h4>
   </div>
    </div>
    )
}
export default Header123