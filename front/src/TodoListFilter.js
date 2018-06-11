import React, { Component } from 'react'
import { Form, Grid, Radio } from 'semantic-ui-react'

export default class TodoListFilter extends Component {
  constructor (props) {
    super(props)
    // this.state = {
    //  value: 'todo'
    // }
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
              checked={this.props.value === 'done'}
              onChange={this.props.handleChange}
            />
          </Grid.Column>
          <Grid.Column>
            <Radio
              toggle
              label='Show todo'
              name='radioGroup'
              value='todo'
              checked={this.props.value === 'todo'}
              onChange={this.props.handleChange}
            />
          </Grid.Column>
          <Grid.Column>
            <Radio
              toggle
              label='Show all'
              name='radioGroup'
              value='all'
              checked={this.props.value === 'all'}
              onChange={this.props.handleChange}
            />
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}
