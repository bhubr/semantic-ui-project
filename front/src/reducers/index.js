const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_VOTE':
      const {id} = action
      const {candidates} = state
      const i = candidates.findIndex(
        candidate => candidate.id === id
      )
      const candidatesCopy = [...candidates]
      candidatesCopy[i].votes += 1
      return {
        candidates: candidatesCopy
      }
    default:
      return state
  }
}

export default reducer