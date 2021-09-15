import { useState } from 'react';
import './TaskCreate.css';

function TaskCreate({addTask}) {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(inputValue);
        setInputValue('')
    }

  return (
    <form 
        className="task-form"
        onSubmit={handleSubmit}
    >
      <input
        className='task-form__input'
        placeholder='add new task'
        type='text'
        value={inputValue}
        onChange={handleChange}
      />

      <button
        className='task-form__btn'
      >
          add
      </button>
    </form>
  );
}

export default TaskCreate;
