const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_VOTE':
      const id = action.id
      const { candidates } = state
      const candidatesCopy = [...candidates]
      const i = candidatesCopy.findIndex(
        candidate => candidate.id === id
      )
      candidatesCopy[i].votes += 1
      return {
        candidates: candidatesCopy
      }
  }
}

export default reducer
