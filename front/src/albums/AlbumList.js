import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import AlbumCard from './AlbumCard'

const AlbumList = ({ albums }) => (
  <Grid columns={3}>
    {
      albums.map((a, k) =>
        <Grid.Column key={k}>
          <AlbumCard album={a} />
        </Grid.Column>
      )
    }
  </Grid>
)

AlbumList.propTypes = {
  albums: PropTypes.array
}

export default AlbumList
