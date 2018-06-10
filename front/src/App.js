import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import AlbumList from './albums/AlbumList'
import albums from './albums/albumsWithRatings'

class App extends Component {
  render () {
    return (
      <Container>
        <AlbumList albums={albums} />
      </Container>
    )
  }
}

export default App
