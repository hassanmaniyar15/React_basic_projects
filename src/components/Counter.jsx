// // // // // // class based component 

// // // // // import React from "react";

// // // // // class Counter extends React.Component{

// // // // //     // state = {
// // // // //     //     count : 0
// // // // //     // }

// // // // // constructor(props) // Counstructor function is used to initialize a value
// // // // // {
// // // // //     super()
// // // // // this.state = {
// // // // //     count: props.count
// // // // // }

// // // // //     console.log("const")
// // // // // }
// // // // // des = () => {
// // // // //   const currentcount = this.state.count
// // // // //   this.setState({
// // // // // count : currentcount - this.props.value
// // // // //   })
// // // // // }

// // // // // inc = () => {
// // // // //     const currentcount = this.state.count
// // // // //     this.setState({
// // // // //         count : currentcount + this.props.value
// // // // //     })
// // // // // }



// // // // //     render()
// // // // //     {
// // // // //         console.log("render")
// // // // //        return(
// // // // // <>
// // // // // <p className= "mt-5">This is a Counter</p>
// // // // // <div className = "flex items-center justify-center gap-3 my-4   " >
// // // // //     <button onClick={this.des} >-</button>
// // // // //     <p>{this.state.count}</p>
// // // // //     <button onClick={this.inc}  >+</button>
// // // // // </div>
// // // // // </>

// // // // //        )
        
// // // // //     }
// // // // // }
 
// // // // // export default Counter

// // // // import React from "react";

// // // // class Counter extends React.Component{


// // // //     constructor(props){// constructor function is used to initialize any value
// // // //         super()
// // // //         this.state = {
// // // //             count: props.count
// // // //             }
// // // //             console.log("1st")
// // // //             setInterval(() => console.log(1) , 2000)
// // // //     }

// // // // dec = () =>{
// // // //     const currentCount = this.state.count
// // // //     this.setState({
// // // //         count: currentCount - this.props.value
// // // //     })
// // // // }
// // // // inc = () =>{
// // // //     const currentCount = this.state.count
// // // //     this.setState({
// // // //         count: currentCount + this.props.value
// // // //     })
// // // // }

// // // // componentDidMount = () =>{
// // // //     console.log("Mounted")
// // // // }

// // // // shouldComponentUpdate = () =>{
// // // // return true
// // // // }
// // // // componentDidUpdate = () =>{
// // // //     console.log("Updated")
// // // // }
// // // // componentWillUnmount = () =>{
// // // //     clearInterval()
// // // // }

// // // //     render(){
// // // //         console.log("Inside Render")
// // // //         return<>
// // // //         <p className="mt-5"  >This is a Counter</p>
// // // //         <div className="flex items-center justify-center gap-3 my-4">
// // // //         <button className="bg-red-600"  onClick={this.dec}>Decrement</button>
// // // //         <p>{this.state.count}</p>
// // // //         <button className="bg-green-500"   onClick={this.inc}>Increment</button>
// // // //         </div>
// // // //         </>
// // // //     }
// // // // }

// // // // export default Counter

// // // // Create a Counter by using class based components

// // // import React from "react";

// // // class Counter extends React.Component{

// // //     state = {
// // //         count: 0
// // //     }
// // //     constructor(){
// // //         super()
// // //     }
// // //     inc = () =>{
// // //         const currentCount = this.state.count
// // //         this.setState({
// // //             count: currentCount + 1
// // //         })
// // //     }

// // //     dec = () =>{
// // //         const currentCount = this.state.count
// // //         this.setState({
// // //             count: currentCount - 1
// // //         })
// // //     }

// // //     render(){
// // //         return(
// // //             <>
// // //             <p className="mt-5" >This is a Counter</p>
// // //             <div className="flex items-center justify-center gap-3 my-4"  >
// // //                 <button className="bg-red-700" onClick={this.dec}>Decrement </button>
// // //                 <p>{this.state.count}</p>
// // //                 <button className="bg-green-600"  onClick={this.inc}>Increment</button>
// // //             </div>
// // //             </>
// // //         )
// // //     }
// // // }

// // // export default Counter

// // import React, { useState } from "react";

// // function Counter(){
// //     const[data , setdata] = useState("Gani")

// //     function update()
// //     {
// //         setdata("Gulam")
// //     }
// //     function update1()
// //     {
// //         setdata("Salman")
// //     }
// //     return<>
// //     <div>
// //         <h1>{data}</h1>
// //         <button onClick={update}  >Update Name</button>
// //         <button onClick={update1}  >Update Name</button>
// //     </div>
// //     </>
// // }

// // export default Counter

// import React, { useState } from "react";

// function Counter(){
//     const[data , setdata] = useState("Hassan")

//     function Updatedata(){
// setdata("Maniyar")
//     }
//     return<>
//     <div >
//         <h1>{data}</h1>
//         <button onClick={Updatedata}  >Update Data</button>
//     </div>
//     </>
// }
// export default Counter

import React from "react";

class App extends React.Component{

    constructor(){
        super()
        this.state= {
data: "lameer"
        }
    }
updatedata()
{
    this.setState({data: "Kapoor"})
}

    render(){
        return(<>
        <div  >
<h1>{this.state.data}</h1>
<button onClick={() => this.updatedata}>Update data</button>
        </div>
        </>
        )
    }
}
export default App






