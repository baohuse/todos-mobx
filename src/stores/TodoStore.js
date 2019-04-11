import { observable, computed, action, autorun} from 'mobx'

class Todo {
    @observable text
    @observable id
    @observable completed

    constructor(value) {
        this.text = value
        this.id = Date.now()
        this.completed = false
    }
}


export default class TodoStore {
    @observable todos = [{ text: '我要和手磨咖啡', completed: true, id: '22'}]
    @observable count = 1
    @observable filter = ''

    @computed get sum() {
        return this.count +1
    }


    @action
    changeCount = () => {
        this.count = this.count + 1
    }

    @action
    addTodo = (value) => {
        this.todos.push(new Todo(value))
    }

    @action
    toggleComplete = (todo) => {
        todo.completed = !todo.completed
    }
}

const t = new TodoStore()
//我是订阅者
autorun(() => {
    console.log(t.todos)
})