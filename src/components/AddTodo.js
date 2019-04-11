import React from 'react'

const AddTodo = ({ addTodo }) => {
    let input
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log(input.value.trim())
          if(!input.value.trim()) return
          addTodo(input.value)  
        }}>
          <input ref={ node => input = node}/>
          <button type="submit"> add todo</button>
        </form>
      </div>
    )
  }

export default AddTodo