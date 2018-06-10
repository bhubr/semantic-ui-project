import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import TodoList from './TodoList'
import TodoListFilter from './TodoListFilter'

const filterFuncs = {
  done: task => task.done,
  todo: task => !task.done,
  all: () => true
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, done: true, description: 'Faire la vaisselle' },
        { id: 2, done: false, description: 'Faire le linge' }
      ],
      filter: 'todo'
    }
    this.onChangeFilter = this.onChangeFilter.bind(this)
  }
  onChangeFilter (e, radio) {
    this.setState({
      filter: radio.value
    })
  }
  render () {
    const { filter } = this.state
    const filterFunc = filterFuncs[filter]
    const tasks = this.state.tasks.filter(filterFunc)
    return (
      <Container>
        <h1>TodoList</h1>
        <TodoListFilter value={filter} onChange={this.onChangeFilter} />
        <TodoList tasks={tasks} />
      </Container>
    )
  }
}

export default App
