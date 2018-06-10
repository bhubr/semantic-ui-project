import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Rating } from 'semantic-ui-react'

const AlbumCard = ({ album }) => (
  <Card>
    <Image src={ '/img/' + album.image } />
    <Card.Content>
      <Card.Header>{ album.title }</Card.Header>
      <Card.Meta>
        <span className='date'>{ album.artist }</span>
      </Card.Meta>
      {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
    </Card.Content>
    <Card.Content extra>
      <Rating icon='star' defaultRating={ album.rating } maxRating={5} />
    </Card.Content>
  </Card>
)

AlbumCard.propTypes = {
  album: PropTypes.object
}

export default AlbumCard
