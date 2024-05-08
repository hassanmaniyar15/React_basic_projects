// import React, { useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter a new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import React, { useState } from "react";

const TodoList = () => {
const[title , settitle] = useState("")
const[desc , setdesc] = useState("")
const[maintask , setmaintask] = useState([])

const SubmitHandler = (e) => {
e.preventDefault()
setmaintask([...maintask , {title , desc}])
settitle("")
setdesc("")
}

const deleteHandler = (i) =>{
let copytask = [...maintask]
copytask.splice(i , 1)
setmaintask(copytask)
}

let rendertask = <h2 className="text-black">Not task available</h2>

if(maintask.length > 0){
  rendertask = maintask.map((t , i) =>{
return (
  <li className="flex items-center justify-between mb-5"  >
     <div className="text-black flex justify-between"  >
  <h5 className="text-xl font-semibold">{t.title}</h5>
  <h6 className="text-xl font-semibold">{t.desc}</h6>
</div>
<button 
onClick={() => deleteHandler(i)}
className="bg-red-500 text-white rounded font-bold"  >Delete</button>
  </li>
)
})
}

  return(
  <>
  <h1 className="bg-yellow-400 text-black p-5 text-4xl font-bold text-center"  >Hassan Todo</h1>
  <form onSubmit={SubmitHandler}  >
    <input 
    type="text" 
    className="text-2xl border-zinc-600 border-2 m-5 px-4 py-2"
    placeholder="Enter task here."
    value={title}
    onChange={(e) => settitle(e.target.value)}
    />
     <input 
    type="text" 
    className="text-2xl border-zinc-600 border-2 m-5 px-4 py-2"
    placeholder="Enter Description here."
    value={desc}
    onChange={(e) => setdesc(e.target.value)}
    />
    <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded">Add task</button>
    
  </form>
  <hr />
  <div className="p-8 bg-slate-300  "  >
<ul>{rendertask}</ul>
  </div>
  </>
  )
}

export default TodoList