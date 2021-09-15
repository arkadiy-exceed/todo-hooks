import { useEffect, useState } from 'react';
import Task from '../Task/Task';
import TaskCreate from '../TaskCreate/TaskCreate';
import './TaskWrapper.css';
import axios from 'axios';

function TaskWrapper() {

    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if (userInput) {
            axios.post('http://localhost:3002/tasks/', {
                text: userInput,
                done: false,
                like: false
            }).then(res => {
                setTodos([res.data, ...todos])
            })
        }
    }

    const removeTask = (id) => {
        axios.delete(`http://localhost:3002/tasks/${id}`)
        .then(res => 
            setTodos(todos.filter(item => item._id !== res.data._id))
        )
        
    }

    const changeDone = (id, done) => {
        axios.put(`http://localhost:3002/tasks/${id}`, {
            done: !done
        })
        .then(res => {
            console.log(res)
            setTodos(
                todos.map(item => {
                    if(item._id === res.data._id) {
                        return {...item, done: res.data.done}
                    }
                    return item
            }))
        })
        
    }

    const changeLike = (id, like) => {
        axios.put(`http://localhost:3002/tasks/${id}`, {
            like: !like
        })
        .then(res => {
            setTodos(
                todos.map(item => {
                    if (item._id === res.data._id) {
                        return {...item, like: res.data.like}
                    }
                    return item
                })
            )
        })
        
    }

    useEffect(() => {
        axios.get('http://localhost:3002/tasks/')
        .then(res => setTodos(res.data))
    }, []) 
 
  return (
    <div className="task-wrapper">
        <header className='header'>todo list</header>
      <TaskCreate
        addTask={addTask}
      />
      {console.log(todos)}
      {todos.map(item => {
          return(
              <Task
                key={item._id}
                item={item}
                removeTask={removeTask}
                changeDone={changeDone}
                changeLike={changeLike}
              />
          )
      })}
    </div>
  );
}

export default TaskWrapper;
