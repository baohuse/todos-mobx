import React, { Component } from 'react';
import './mobxExample'
import { observer, inject } from 'mobx-react'
import AddTodo from './components/AddTodo'
import Filter  from './components/Filter'
import TodoList from './components/TodoList'

import './App.css';

@inject('store')
@observer
class App extends Component {
  //使用action改变state的值
  onClick = () => {
    this.props.store.changeCount()
  }
  filter = (e) => {
    this.props.store.filter = e.target.value
  }

  //新增todo
  addTodo = (value) => {
    console.log(value)
    this.props.store.addTodo(value)
  }

  toggleComplete = todo => {
    this.props.store.toggleComplete(todo)
  }
  render() {
    const store = this.props.store
    console.log(store.todos)
    return (
      <div className="App">
        <div>
          <h1>苏大强 作的一天</h1>
          <AddTodo addTodo={value => this.addTodo(value)}/>
          <Filter/>
          <TodoList todos={store.todos} onclick={ todo => this.toggleComplete(todo)}/>
        </div>
        
        <div>
          <h2>这是测试奥</h2>
          <p>经过观察的state:{store.count} </p>
          <p>计算过的computed（被观察的state变化来，我就跟着变）：{store.sum}</p>
          <button onClick={this.onClick}>changeCount</button>

          <p>{store.filter}</p>
          <input onChange={this.filter} value={store.filter}/>
        </div>
        
      </div>
    );
  }
}

export default App;
