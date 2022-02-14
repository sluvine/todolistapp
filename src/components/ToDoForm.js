import React, {useState} from 'react'

function ToDoForm({addTask}) {
  const [userInput, setUserInput] = useState('')

  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${e} called submit... input was ${userInput}`)
    addTask(userInput)
    setUserInput('')
  }

  return (
    <form className="new-task-form">
      <input value={userInput} type="text" onChange={handleInputChange} placeholder="Task name..." />
      <button type="submit" onClick={handleSubmit}>Add to List</button>
    </form>
  )
}

export default ToDoForm