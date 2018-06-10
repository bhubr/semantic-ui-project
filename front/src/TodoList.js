import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { Checkbox, Label, Menu, Table } from 'semantic-ui-react'

const TodoList = ({ tasks }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        tasks.map((task, k) => (
          <TodoItem key={k} task={task} />
        ))
      }
    </Table.Body>
  </Table>
)

TodoList.propTypes = {
  tasks: PropTypes.array
}

export default TodoList