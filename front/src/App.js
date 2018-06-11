/* global fetch */
import React, { Component } from 'react'
import { Container, Grid, Item } from 'semantic-ui-react'

const cities = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Lille', 'Bordeaux', 'Nantes', 'Nice']

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      city: ''
    }
  }
  componentDidMount () {
    fetch('/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }
  render () {
    const showUsers = this.state.city !== ''
    const users = showUsers ? this.state.users.filter(u => u.city.name === this.state.city) : []
    const citiesSelector = (
      <select
        style={{marginBottom: '30px'}}
        value={this.state.city}
        onChange={(e) => this.setState({ city: e.target.value })}>
        <option value="">Choisir une ville</option>
        { cities.map((city, k) =>
          <option
            key={k}
            value={city}>
            {city}
          </option>)}
      </select>
    )
    return (
      <Container>
        { citiesSelector }
        { showUsers
          ? <Grid columns={8}>{ users.map((u, k) => (
            <Grid.Column key={k}>
              <Item key={k}>
                <Item.Image size='tiny' src={`/avatars${u.avatar}`} />
                <Item.Content verticalAlign='middle'>{u.username}</Item.Content>
              </Item>
            </Grid.Column>
          )) }</Grid>
          : ''
        }
      </Container>
    )
  }
}

export default App
