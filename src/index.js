import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'mobx-react'
import TodoStore from './stores/TodoStore'

const store = new TodoStore()

render(
   <Provider store={store}>
      <App />
   </Provider>
,
document.getElementById('root')
);


