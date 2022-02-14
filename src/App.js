import React, {useState} from 'react';

import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import data from'./data.json';

function App() {
  const [ toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let tasks = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : {... task};
    })
    setToDoList(tasks)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = (userInput) => {
    let existingTasks = [...toDoList]
    console.log(existingTasks)
    let updatedTasks = [
      ...existingTasks,
      {
        id: toDoList.length + 1,
        task: userInput,
        complete: false
      }
    ]
    setToDoList(updatedTasks)
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
    </div>
  );
}

export default App;