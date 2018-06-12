export const INCREMENT_VOTE = 'INCREMENT_VOTE'

// Redux: action creator
export const incrementVote = candidateId => {
  return {
    type: 'INCREMENT_VOTE',
    id: candidateId
  }
}
