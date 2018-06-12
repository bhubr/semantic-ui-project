import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CandidateList from './voteforme/CandidateList'
import CandidatePieChart from './voteforme/CandidatePieChart'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { candidates: [] }
  }
  render () {
    return (
      <Container>
        <h1>RateUrMaddaFakka</h1>
        <p>Who&apos;s the greatest of them all?</p>
        <Grid columns={2}>
          <Grid.Column>
            <CandidateList />
          </Grid.Column>
          <Grid.Column>
            <CandidatePieChart />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App
