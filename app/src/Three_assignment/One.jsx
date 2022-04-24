import React, { useState } from "react";
import Todolist from './Todolist'
import {nanoid} from "nanoid"

export default function One(){
    const [task,setTask] = useState("")
    const [todo,setTodo] = useState([])
    const [isloggedin,setloggin] = useState(false)
    let addtext = (e)=>{
        setTask(e.target.value)
    }
    let handleclick = () =>{
        let payload = {
            title:task,
            id:nanoid(),
            status:false,
        }
        // console.log(todo)
        setTodo([payload,...todo])
    }
    let handleremove = (id)=>{
        console.log(id)
        let newTodo = todo.filter((item)=> item.id!==id)
        setTodo(newTodo)
    }
    let handletoggle = (id)=>{
        
    }
    let login = ()=>{
        setloggin(true)
    }
    let logoff = () =>{
        setloggin(false)
    }
    return(
        <>

        {isloggedin? (
        <>
        <button onClick={logoff}>Logout</button>
        <input type="text" value={task} placeholder="Enter your task" onChange={addtext} />
        <button onClick={handleclick}>Add</button>
        {todo.length?todo.map((item)=>{
            return <Todolist key={item.id} handleid={handleremove} {...item} handleto={handletoggle} />
        }):<h1>No todo exists</h1>}
        </>
        ) : ( <>
            <h1>User is not logged in</h1>
            <button onClick={login}>Login</button>
            </>)}
        </>
    )
}