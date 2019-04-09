import { observable } from 'mobx'

export default class TodoStore {
    @observable todos = []
    @observable filter = 'SHOW_ALL'
}