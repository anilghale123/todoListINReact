
import './App.css';
import {useState} from 'react';

function App() {
   const [todolist, setTodoList] = useState([]);
   const [newtask, setNewTask] = useState("");

  const handleChange = (event) => {
         setNewTask(event.target.value);
  }

  const addTask = () => {
        const task = {
          id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
          taskName: newtask,
          completed: false,
        };
        const newTodoList = [...todolist,task];
        setTodoList(newTodoList);
  }

  const deleteTask = (id) => {
    const newTodoList = todolist.filter((task) => {
      return task.id!==id;
    });

    setTodoList(newTodoList);
  }

  const updateTask = (id) => {
      // todolist.map((update) => {   my idea but not optimized one 
      //      if(id === update.id)   
      //      {
      //         return update.completed = true;
             
      //      }
      //      else{
      //       return false;
      //      }
      // })

      setTodoList(
        todolist.map((task) => {
           if(task.id == id)
           {
            return {...task, completed: true};
           }
           else{
            return task;
           }
        })

      );
   
  };

  return (
    <div className="App">
    <div className="container">
      <h1>ToDo List</h1>
      <div>
        <input type='text' onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-container">
        {todolist.map((task) => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <div className="task-name">{task.taskName}</div>
            <div className="task-buttons">
              <button onClick={() => updateTask(task.id)}>✅</button>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
        }  
export default App;
