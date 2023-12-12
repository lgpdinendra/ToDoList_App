import React ,{useState} from 'react'

const EditToDoFrom = ({editTodo,task}) => {

    const [value,setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      editTodo(value,task.id);

      setValue("");
    }

  return (
    <div>
      <form className='todofrom' onSubmit={handleSubmit}>
        <input type='text' className='todo_input' 
        value={value} placeholder='Update Task'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo_btn'>Update</button>
      </form>
    </div>
  )
}

export default EditToDoFrom
