import React from "react";
import Cards from "./Cards";

const Foreground = () => {
const data = [
{
desc : "Lorem ipsum dollar sit amet",
filesize : ".9mb",
close : true,
tag: {isOpen: true , tagTitle: "Download Now" , tagColor: "green"},
},
{
    desc : "Lorem ipsum dollar sit amet",
    filesize : ".9mb",
    close : true,
    tag: {isOpen: true , tagTitle: "Download Now" , tagColor: "green"},
    },
    {
        desc : "Lorem ipsum dollar sit amet",
        filesize : ".9mb",
        close : true,
        tag: {isOpen: true , tagTitle: "Download Now" , tagColor: "green"},
        }
]

    return(
    <>
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-1 flex-wrap ">
{data.map((item , index) => (
    <Cards data={item}  />
))}
    </div>
    </>
    )
}

export default Foreground