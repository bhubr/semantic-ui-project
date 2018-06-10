import React, { Component } from 'react'
import AlbumList from './AlbumList'

import albums from './albums'
albums.forEach((a, i, albums) => {
  albums[i].rating = 1 + Math.floor(5 * Math.random())
})

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
