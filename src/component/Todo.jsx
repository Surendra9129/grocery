import React from "react";
import { useState } from "react";
import { TodoList } from "./TodoList";

const Todo=()=>{

    const [change,setChange]=useState('')
    const [fchange,setFchange]=useState([]);
    const handlechange=(e)=>{
          setChange(e.target.value);
    }
  
    const handleclick=()=>{
       setFchange([...fchange,change]);
       setChange('')
    }

    return(
 
        <>
        <h1 className="gro">Grocery.com</h1>
        <div className='main_div'>
          <div className="top_div">
         <input type="text" placeholde="enter item" value={change} onChange={handlechange}></input>
         <button onClick={handleclick}> ➕ </button>
          </div>
          <ol>
          {fchange.map((e,i)=>{
           return  <TodoList key={i} data={e} />
          })}
          </ol>
        </div>
        </>
    )
}

export {Todo}