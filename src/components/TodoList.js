import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Filter } from '../actions'
function getVisiableTodos(todos, filter) {
  switch (filter) {
    case Filter.SHOW_ALL:
      return todos
    case Filter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case Filter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo =>
        <Todo 
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onClick={() => toggleTodo(todo.id)}     
        />
      )
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: getVisiableTodos(state.todos, state.filterTodo)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch({type: 'TOGGLE_TODO', id})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
