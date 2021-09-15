// import { useState } from 'react';
import './Task.css';

function Task({item, removeTask, changeDone, changeLike}) {



  return (
    <div 
        className={item.done ? 'task checked' : 'task'}
        key={item.id}
    >
        <p
            className={item.like ? 'task__like like' : 'task__like'}
            onDoubleClick={() => changeLike(item._id, item.like)}
        >
            {item.text}
        </p>
        <input
            type='checkbox'
            checked={item.done}
            onChange={() => changeDone(item._id, item.done)}
        />
        <button
            onClick={() => removeTask(item._id)}
        >
            delete
        </button>
    </div>
  );
}

export default Task;