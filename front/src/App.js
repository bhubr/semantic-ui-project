import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import TodoList from './TodoList'
import TodoListFilter from './TodoListFilter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, done: true, description: 'Faire la vaisselle' },
        { id: 2, done: false, description: 'Passer la serpillère' },
        { id: 3, done: true, description: 'Faire la lessive' }
      ],
      filter: 'todo'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e, radio) {
    this.setState({ filter: radio.value })
  }

  render () {
    let tasks
    const {filter} = this.state
    switch(filter) {
      case 'all': tasks = this.state.tasks
        break
      case 'done': tasks = this.state.tasks.filter(task => task.done)
        break
      case 'todo': default: tasks = this.state.tasks.filter(task => !task.done)
    }
    // if (filter === 'all') {
    //   tasks = this.state.tasks
    // }
    // else if (filter === 'done') {
    //   tasks = this.state.tasks.filter(task => task.done)
    // }
    // else if (filter === 'todo') {
    //   tasks = this.state.tasks.filter(task => !task.done)
    // }

    return (
      <Container>
        <h1>TodoList</h1>
        <TodoListFilter value={this.state.filter} handleChangeFilter={this.handleChange} />
        <TodoList tasks={tasks} />
      </Container>
    )
  }
}

export default App
