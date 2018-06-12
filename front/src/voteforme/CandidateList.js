import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import CandidateCard from './CandidateCard'

const CandidateList = (props) => (
  <Grid columns={3}>
    {
      props.candidates.map((c, k) =>
        <Grid.Column key={k}>
          <CandidateCard
            candidate={c}
            handleVote={props.handleVote} />
        </Grid.Column>
      )
    }
  </Grid>
)

CandidateList.propTypes = {
  candidates: PropTypes.array
}

export default CandidateList
