import React, { Component } from 'react'
import { Container, Item } from 'semantic-ui-react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount () {
    fetch('/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }
  render () {
    return (
      <Container>
        {
          this.state.users.map((u, k) => (
            <Item key={k}>
              <Item.Image size='tiny' src={`/avatars${u.avatar}`} />
              <Item.Content verticalAlign='middle'>{u.username}</Item.Content>
            </Item>
          ))
        }
      </Container>
    )
  }
}

export default App
