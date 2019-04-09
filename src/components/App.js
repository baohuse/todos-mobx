import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';
import './app.css'
//试想一下，在不使用状态管理工具的条件下，我们怎样将 AddTodo 组件里面的value，传递给TodoList
//换句话说，这两个兄弟组件之间怎样传递/共享数据？
//一般条件下，我们会找到他们的最小公约父组件，使用状态提升，将他们各自的state提到 这个最小公约父组件里面
//这样 App组件通过给 AddTodo传递一个 callback的 props来获取状态并传递给 TodoList这个组件
//
const App = () => (
  <div className="app">
    <AddTodo />
    <TodoFilters />
    <TodoList />
  </div>
)

export default App;
