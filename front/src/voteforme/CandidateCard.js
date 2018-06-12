import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Icon, Rating } from 'semantic-ui-react'

const CandidateCard = props => (
  <Card>
    <Image src={ props.candidate.image } />
    <Card.Content>
      <Card.Header>{ props.candidate.title }</Card.Header>
      <Card.Meta>
        <span className='date'>{ props.candidate.artist }</span>
      </Card.Meta>
      <Card.Description style={{textAlign: 'center'}}>
        <Icon name="thumbs up" size='large' />
      </Card.Description>
    </Card.Content>
    <Card.Content extra style={{textAlign: 'center', backgroundColor: props.candidate.color, color: '#fff'}}>
      { props.candidate.votes } { props.candidate.votes === 1 ? 'vote' : 'votes' }
    </Card.Content>
  </Card>
)

CandidateCard.propTypes = {
  album: PropTypes.object,
  candidate: PropTypes.object
}

export default CandidateCard
