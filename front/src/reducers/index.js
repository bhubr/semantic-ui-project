const initialState = {
  candidates: [
    { id: 1, color: '#E38627', name: 'Donald Trump', votes: 3, image: 'https://static.thetoptens.com/img/lists/6836.jpg' },
    { id: 2, color: '#C13C37', name: 'George W Bush', votes: 1, image: 'https://static.thetoptens.com/img/lists/31161.jpg' },
    { id: 3, color: '#6A2135', name: 'Silvio Berlusconi', votes: 1, image: 'https://static.thetoptens.com/img/lists/1404.jpg' }
  ]
}

const reducer = (state = initialState, action) => {
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
