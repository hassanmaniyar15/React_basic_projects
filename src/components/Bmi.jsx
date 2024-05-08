import React, { useState } from "react";

const BMI = () => {
const[weight , setweight] = useState(0);
const[height , setheight] = useState(0);
const[bmi , setbmi] = useState("");
const[message , setmessage] = useState("")

let calBmi = (e) => {
 e.preventDefault()
if(weight === 0 || height === 0)
{
    console.log("Please enter a valid height and weight")
}
else
{
    let bmi = (weight/(height*height) * 703)
    setbmi(bmi.toFixed(1))
}
if(bmi < 25)
{
  setmessage("You are underweight")
}
else if(bmi >= 25 && bmi < 30)
{
setmessage("You are a healthy weight")
}
else{
    setmessage("You are overweight")
}
}

let reload = () => {
    window.location.reload()
}

    return(
        <>
        <div className="app">
 <div className="container">
    <h2>BMI Calculator</h2>
    <form onSubmit={calBmi}  >
<div>
    <label> Weight(lbs): </label>
    <input 
    type="text" 
    placeholder="Please enter your weight" 
    value={weight}
    onChange={(e) => setweight(e.target.value)}
    />
</div>
<br />
<div>
    <label>Height(ln):</label>
    <input 
    type="text" 
    placeholder="Please enter your height"
    value={height} 
     onChange={(e) => setheight(e.target.value)}
     />
</div>
<br />
<div>
   <button  className="bg-green-600">Submit</button>
    <button className="bg-red-600" onClick={reload} type="submit"  >Reload</button>
</div>
<div className="center">
<h3>Your Bmi is: {bmi}</h3>
<p>{message}</p>
</div>
    </form>
 </div>
        </div>
        </>
    )
}
export default BMI