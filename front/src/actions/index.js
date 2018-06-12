export const INCREMENT_VOTE = 'INCREMENT_VOTE'

export function incrementVote (candidateId) {
  return {
    type: INCREMENT_VOTE,
    id: candidateId
  }
}
