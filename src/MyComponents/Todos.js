import React from 'react'
import Todo from "../MyComponents/Todo";

const Todos = (props) => {
  const MyStyle = {
    minHeight: "70vh",
    matgin: "10px auto"
  }
  return (
    <div className='container my-3' style={MyStyle}>
      <h3>Todos List</h3>
      {props.todos.length===0? "No todos to display": 
      props.todos.map((todo)=>{
          return(

            <>
            <Todo todo = {todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
            </>
          )

          
          
          
      })
      }
      
    </div>
  )
}

export default Todos
