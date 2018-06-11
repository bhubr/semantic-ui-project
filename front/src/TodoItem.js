// import React from 'react'
// import PropTypes from 'prop-types'
// import { Checkbox, Table } from 'semantic-ui-react'

// const TodoItem = ({ task }) => (
//   <Table.Row>
//     <Table.Cell><Checkbox toggle checked={ task.done } /></Table.Cell>
//     <Table.Cell>{ task.description }</Table.Cell>
//   </Table.Row>
// )

// TodoItem.propTypes = {
//   task: PropTypes.object
// }

// export default TodoItem

import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Table } from 'semantic-ui-react'

class TodoItem extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     done: this.props.task.done
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }
  // handleChange (e) {
  //   this.setState({ done: !this.state.done })
  // }
  render () {
    return (
      <Table.Row>
        <Table.Cell>
          <Checkbox
            toggle
            checked={ this.props.task.done }
            onChange={() => this.props.handleToggle(this.props.task.id) } />
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
