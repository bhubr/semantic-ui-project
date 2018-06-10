import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import TodoList from './TodoList'
import TodoListFilter from './TodoListFilter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, done: true, description: 'Faire la vaisselle' }
      ]
    }
  }
  render () {
    return (
      <Container>
        <h1>TodoList</h1>
        <TodoListFilter />
        <TodoList tasks={this.state.tasks} />
      </Container>
    )
  }
}

export default App
