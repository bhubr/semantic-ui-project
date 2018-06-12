const initialState = {
  candidates: [
    { id: 1, color: '#E38627', name: 'Donald Trump', votes: 2, image: 'https://static.thetoptens.com/img/lists/6836.jpg' },
    { id: 2, color: '#C13C37', name: 'George W Bush', votes: 2, image: 'https://static.thetoptens.com/img/lists/31161.jpg' },
    { id: 3, color: '#6A2135', name: 'Silvio Berlusconi', votes: 2, image: 'https://static.thetoptens.com/img/lists/1404.jpg' }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_VOTE':
      const id = action.id
      const { candidates } = state
      const candidatesCopy = [...candidates]
      const i = candidatesCopy.findIndex(
        candidate => candidate.id === id
      )
      candidatesCopy[i] = Object.assign(
        {}, candidatesCopy[i], { votes: candidatesCopy[i].votes += 1 }
      )
      return {
        candidates: candidatesCopy.map(c => Object.assign({}, c))
      }

    default:
      return state
  }
}

export default reducer
