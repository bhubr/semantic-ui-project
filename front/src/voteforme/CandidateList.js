import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import CandidateCard from './CandidateCard'
import { connect } from 'react-redux'

const CandidateList = (props) => (
  <Grid columns={3}>
    {
      props.candidates.map((c, k) =>
        <Grid.Column key={k}>
          <CandidateCard
            candidate={c} />
        </Grid.Column>
      )
    }
  </Grid>
)

CandidateList.propTypes = {
  candidates: PropTypes.array
}

const mapStateToProps = state => ({
  candidates: state.candidates
})
export default connect(mapStateToProps)(CandidateList)
