import React, { Component } from 'react'
import AlbumList from './AlbumList'

import albums from './albumsWithRatings'

class App extends Component {
  render () {
    return (
      <div>
        <AlbumList albums={albums} />
      </div>
    )
  }
}

export default App
