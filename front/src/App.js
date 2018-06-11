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
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleChange (e, radio) {
    this.setState({ filter: radio.value })
  }

  handleToggle (id) {
    console.log(id)
    const {tasks} = this.state
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex(
      obj => obj.id === id
    )
    newTasks[taskIndex].done = !newTasks[taskIndex].done
    this.setState({
      tasks: newTasks
    })
  }
  render () {
    // Cas 1 : Création d'options de filtrage
    const {filter} = this.state
    const filterFuncs = {
      all: () => true,
      done: task => task.done,
      todo: task => !task.done
    }
    const filterFunc = filterFuncs[filter]
    const tasks = this.state.tasks.filter(filterFunc)

    // let tasks

    // Cas 2 : Switch
    // switch (filter) {
    //   case 'all': tasks = this.state.tasks
    //     break
    //   case 'done': tasks = this.state.tasks.filter(task => task.done)
    //     break
    //   case 'todo': default: tasks = this.state.tasks.filter(task => !task.done)
    // }

    // Cas 3: Conditions
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
        <TodoList tasks={tasks} handleToggle={this.handleToggle}/>
      </Container>
    )
  }
}

export default App
