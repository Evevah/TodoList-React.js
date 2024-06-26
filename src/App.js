
import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState , useEffect} from 'react';
import AddTodo from './MyComponents/AddTodo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
    {
      initTodo = [];
    }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"))
    }
  const onDelete =(todo)=>{
    console.log("i am onDelete of todo: ",todo);
    //Deleting this way does not work in react.
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) =>{
    //console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length==0){
       sno=0;
    }
    else{
       sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

   
 
    
  }

  


  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>

      <Header title = "Todo-List" searchBar={false}/>
    

                <AddTodo addTodo={addTodo}/>
                <Todos todos = {todos} onDelete={onDelete}/>
            
        
            
          

      

    <Footer/>

    </>
  );
}


export default App;