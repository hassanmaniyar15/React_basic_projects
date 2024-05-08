import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./theme";
import ThemeBtn from "./ThemeBtn";
import Card1 from "./Card1";

const ThemeSwitcher = () => {
const [themeMode , setThemeMode] = useState("light")

const LightTheme = () => {
    setThemeMode("light")
}
const darkTheme = () => {
    setThemeMode("dark")
}

useEffect(() => {
document.querySelector("html").classList.remove("light" ,"dark")

document.querySelector("html").classList.add("themeMode")
}, [themeMode])


    return(
    <ThemeProvider value={{themeMode , darkTheme, LightTheme}} >
    
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card1/>
                    </div>
                </div>
            </div>
    </ThemeProvider>)
}

export default ThemeSwitcher