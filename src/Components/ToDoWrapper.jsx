import React, { useState } from 'react'
import ToDoFrom from './ToDoFrom'
import ToDo from './ToDo';
import EditToDoFrom from './EditToDoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import './ToDo.css'

const ToDoWrapper = () => {

  const [todos,setTodos] =  useState([]);

  const addTodo = todo => {
    setTodos([...todos,{id:uuidv4(),task:todo ,completed:false,isEditing:false}])
    console.log(todos);
  }

  const tcomplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo,completed:!todo.completed}:todo ))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo,isEditing:!todo.isEditing}:todo))
  }
 
  const edittask = (task,id) =>{
    setTodos(todos.map(todo=>todo.id === id ? {
      ...todo,task,isEditing:!todo.isEditing}:todo))
  }

  return (
    <div className='todowrapper'> 
      <h1>ToDo - List App</h1>
      
      <ToDoFrom addTodo ={addTodo}/>

      {todos.map((todo,index) => (
        todo.isEditing ? (
          <EditToDoFrom editTodo={edittask} task={todo}/>
        ):(
          <ToDo task={todo} key={index} tcomplete={tcomplete} 
          deleteTodo = {deleteTodo} editTodo={editTodo}/>
        )
          
      ))}
      
      
      
    </div>
  )
}

export default ToDoWrapper
