import { observable, autorun } from 'mobx'

class Todos {
    @observable count = 1

    add(c) {
        this.count = c
    }
    
}

let t = new Todos()


autorun(() => {
    console.log(t.count)
})

t.count = 2 
t.count = 3