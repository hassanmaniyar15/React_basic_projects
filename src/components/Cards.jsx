import React from "react";
import { FaFileImage } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";

const Cards = ({data}) => {
    return(
    <>
    <div className="relative w-60 h-72 rounded-[45px] bg-zinc-700 text-white p-5 overflow-hidden">
    <FaFileImage/>
    <p className = " text-sm leading-right mt-5 font-semibold"> {data.desc}</p>
    <div className="footer absolute bottom-0 bg-sky-300 w-full h-10 left-0">
        <div className="flex items-center justify-between"  > 
   <h5>{data.filesize}</h5>
   <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center  "  >
  {data.close ? <IoCloseSharp/> :  <GoDownload size=".7em"  /> }
   <GoDownload size=".7em"  />
   </span>
   {
    data.tag.isOpen ? (
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center ">
        <h3 className="text-sm font-semibold">Download Now</h3>
       </div>
    ) : null
   }
  
    </div>
    </div>
    </div>  
    </>
    )
}
export default Cards