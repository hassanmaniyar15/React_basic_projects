import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home1 from "./Home1";
import About from "./About";
import Contact1 from "./Contact1";

const WebPg = () => {
    return(
    <>
    <h1 className="bg-green-500 text-black"  >React Router</h1>
    <Header/>
    <Home1/>
    <About/>
    <Contact1/>
    <Footer/>
    </>
    )
}
export default WebPg