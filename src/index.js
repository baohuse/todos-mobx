import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react'
import App from './App';
import './index.css';


//引入store
import TodoStore from './stores/TodoStore'

const store = window.store = new TodoStore()

ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider> , 
 document.getElementById('root'));

