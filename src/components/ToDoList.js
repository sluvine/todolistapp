import React from 'react'
import ToDo from './ToDo'

function TodoList({toDoList, handleToggle, handleFilter}) {

  const handleDeleteClick = (e) => {
    // console.log(`${e} called delete function.`)
    handleFilter()
  }

  return (
    <div className="todo-list">
      <button onClick={handleDeleteClick}>Delete Completed Tasks</button>

      {toDoList.map(toDo => {
        return (
          <ToDo toDo={toDo} key={toDo.id} handleToggle={handleToggle}/>
        )
      })}
    </div>
  )
}

export default TodoList