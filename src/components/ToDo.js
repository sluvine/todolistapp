import React from 'react'

function ToDo({toDo, handleToggle}) {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id)
  }

  return (
    <div
      className={toDo.complete ? "todo-item complete" : "todo-item"}
      id={toDo.id}
      key={toDo.id + toDo.task}
      name="todo"
      onClick={handleClick}
    >
      {toDo.task}
    </div>
  )
}

export default ToDo