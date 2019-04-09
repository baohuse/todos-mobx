import React from 'react'
import FilterLink from './FilterLink'
import { Filter } from '../actions'
const TodoFilters = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={Filter.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={Filter.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={Filter.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)


export default TodoFilters;
