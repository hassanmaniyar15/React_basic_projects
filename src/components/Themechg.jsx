import React from "react";
import UserContextProvider from "./UserContextProvider";
import Login from "./Login";
import Profile from "./Profile";

const Themechg = () => 
{
    return(
        <UserContextProvider>
        <h1>Learn React with the excellent learning approach pls.</h1>
        <Login/>
        <Profile/>
        </UserContextProvider>
    )
}
export default Themechg