import React from 'react'

const Todolist = (props) =>{
    const {title,id,status,handleid,handleto} = props
    return(
        <>
        <h1>{title}</h1>
        <button onClick={()=>handleid(id)}>Delete</button>
        </>
    )
}
export default Todolist