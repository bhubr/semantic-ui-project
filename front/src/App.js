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
        { id: 2, done: false, description: 'Sortir la poubelle' }
      ],
      filter: 'todo'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckbox= this.handleCheckbox.bind(this)

  }
  handleChange (e, radio) {
    this.setState({ filter: radio.value })
  }
  handleCheckbox (id) {
    const {tasks} = this.state
    const newTasks= [...tasks]
    const taskIndex= newTasks.findIndex(
      obj => obj.id === id
    )
    newTasks[taskIndex].done = ! newTasks[taskIndex].done
    this.setState({tasks: newTasks })
    console.log(id)
  }



  render () {
    let tasks
    const {filter} = this.state
    //  if(filter === 'all') {
    //    tasks= this.state.tasks
    //  }
    // else if (filter === 'done') {
    //    tasks= this.state.tasks.filter(task => task.done)
    //  }
    //  else if(filter === 'todo') {
    //    tasks=this.state.tasks.filter(task => ! task.done)

    // const filterFuncs= {
    //  all: () => true ,
    //  done: task => task.done,
    //  todo: task => ! task.done
    // }
    // const filterFunc = filterFuncs[filter]
    // const tasks = this.state.tasks.filter(filterFunc)

    switch (filter) {
      case 'all':
        tasks = this.state.tasks
        break
      case 'done' :
        tasks = this.state.tasks.filter(task => task.done)
        break
      case 'todo' :
      default :
        tasks = this.state.tasks.filter(task => !task.done)
    }

    return (
      <Container>
        <h1>TodoList</h1>
        <TodoListFilter value={this.state.filter} handleChange={this.handleChange}/>
        <TodoList tasks={tasks}  handleCheckbox={this.handleCheckbox}/>
      </Container>
    )
  }
}

export default App
