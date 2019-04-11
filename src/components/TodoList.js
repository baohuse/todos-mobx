import React from 'react'
import { observer } from 'mobx-react'

//注意这里要包一层observer，不然不起作用
//也可以使用inject拿到store
const TodoList = observer(({ todos, onclick }) => {
    return (
        <ul>
            {
                todos.map(todo => <li key={todo.id} onClick={() => {onclick(todo)}} 
                    style = {{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                
                >{todo.text}  

                <span>

                    ---状态
                    {
                        todo.completed ? '已完成✅': '没完成❌'
                    }
                </span>
                </li>)
            }
        </ul>
    )
})

export default TodoList