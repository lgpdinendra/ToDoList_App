import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ToDo.css'

const ToDo = ({task,tcomplete,deleteTodo,editTodo}) => {
  return (
    <div className='todo1'>
        <p onClick={()=> tcomplete(task.id)} id='tt1' className = {`${task.completed ? 'completed':""}`} > 
        {task.task}</p>
        <div className='todo2'>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>

    </div>
  )
}

export default ToDo
