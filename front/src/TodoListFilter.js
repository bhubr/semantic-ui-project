import React, { Component } from 'react'
import { Form, Grid, Radio } from 'semantic-ui-react'

export default class TodoListFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'todo'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e, radio) {
    this.setState({ value: radio.value })
  }
  render () {
    return (
      <Form>
        <Grid columns={3}>
          <Grid.Column>
            <Radio
              toggle
              label='Show done'
              name='radioGroup'
              value='done'
              checked={this.state.value === 'done'}
              onChange={this.handleChange}
            />
          </Grid.Column>
          <Grid.Column>
            <Radio
              toggle
              label='Show todo'
              name='radioGroup'
              value='todo'
              checked={this.state.value === 'todo'}
              onChange={this.handleChange}
            />
          </Grid.Column>
          <Grid.Column>
            <Radio
              toggle
              label='Show all'
              name='radioGroup'
              value='all'
              checked={this.state.value === 'all'}
              onChange={this.handleChange}
            />
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}
