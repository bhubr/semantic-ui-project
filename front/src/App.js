import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CandidateList from './voteforme/CandidateList'
import PieChart from 'react-minimal-pie-chart'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      candidates: [
        { id: 1, color: '#E38627', name: 'Donald Trump', votes: 1, image: 'https://static.thetoptens.com/img/lists/6836.jpg' },
        { id: 2, color: '#C13C37', name: 'George W Bush', votes: 1, image: 'https://static.thetoptens.com/img/lists/31161.jpg' },
        { id: 3, color: '#6A2135', name: 'Silvio Berlusconi', votes: 1, image: 'https://static.thetoptens.com/img/lists/1404.jpg' }
      ]
    }
    this.handleVote = this.handleVote.bind(this)
  }
  handleVote (id) {
    const {candidates} = this.state
    const i = candidates.findIndex(candidate => candidate.id === id)
    const candidatesCopy = [...candidates]
    candidatesCopy[i].votes += 1
    this.setState({
      candidates: candidatesCopy
    })
  }

  render () {
    return (
      <Container>
        <h1>RateUrMaddaFakka</h1>
        <p>Who&apos;s the greatest of them all?</p>
        <Grid columns={2}>
          <Grid.Column>
            <CandidateList
              candidates={this.state.candidates} 
              handleVote={this.handleVote} />
          </Grid.Column>
          <Grid.Column>
            <PieChart
              data={this.state.candidates.map(
                candidate => ({ color: candidate.color, value: candidate.votes })
              )}
            />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App
