import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Table } from 'semantic-ui-react'

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      done: this.props.task.done
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({ done: !this.state.done })
  }
  render () {
    return (
      <Table.Row>
        <Table.Cell>
          <Checkbox
            toggle
            checked={ this.state.done }
            onChange={ this.handleChange } />
        </Table.Cell>
        <Table.Cell>{ this.props.task.description }</Table.Cell>
      </Table.Row>
    )
  }
}

TodoItem.propTypes = {
  task: PropTypes.object
}

export default TodoItem
