import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { incrementVote } from '../actions'

const CandidateCard = props => (
  <Card>
    <Image src={ props.candidate.image } />
    <Card.Content>
      <Card.Header>{ props.candidate.title }</Card.Header>
      <Card.Meta>
        <span className='date'>{ props.candidate.artist }</span>
      </Card.Meta>
      <Card.Description style={{textAlign: 'center'}}>
        <Icon
          name="thumbs up"
          size='large'
          onClick={() => props.handleVote(props.candidate.id)} />
      </Card.Description>
    </Card.Content>
    <Card.Content extra style={{textAlign: 'center', backgroundColor: props.candidate.color, color: '#fff'}}>
      { props.candidate.votes } { props.candidate.votes === 1 ? 'vote' : 'votes' }
    </Card.Content>
  </Card>
)

CandidateCard.propTypes = {
  album: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  handleVote: id => dispatch(incrementVote(id))
})

export default connect(null, mapDispatchToProps)(CandidateCard)
