import React ,{useState} from 'react'

const ToDoFrom = ({addTodo}) => {

    const [value,setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      addTodo(value);

      setValue("");
    }

  return (
    <div>
      <form className='todofrom' onSubmit={handleSubmit}>
        <input type='text' className='todo_input' 
        value={value} placeholder='What is the task Today ?'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo_btn'>Add Task</button>
      </form>
    </div>
  )
}

export default ToDoFrom
