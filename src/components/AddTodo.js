import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(input.value.trim(), dispatch)
        if(!input.value.trim()) return
        dispatch(addTodo(input.value))   
      }}>
        <input ref={ node => input = node}/>
        <button type="submit"> add todo</button>
      </form>
    </div>
  )
}



export default connect()(AddTodo);
