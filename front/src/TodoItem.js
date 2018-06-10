import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Table } from 'semantic-ui-react'

const TodoItem = ({ task }) => (
  <Table.Row>
    <Table.Cell><Checkbox toggle checked={ task.done } /></Table.Cell>
    <Table.Cell>{ task.description }</Table.Cell>
  </Table.Row>
)

TodoItem.propTypes = {
  task: PropTypes.object
}

export default TodoItem
