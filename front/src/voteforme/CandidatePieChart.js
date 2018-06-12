import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import { connect } from 'react-redux'

const CandidatePieChart = ({ candidates }) => (
  <PieChart
    data={candidates.map(
      ({ color, votes }) => ({ color: color, value: votes })
    )}
  />
)
const mapStateToProps = state => ({
  candidates: state.candidates
})
export default connect(mapStateToProps)(CandidatePieChart)
