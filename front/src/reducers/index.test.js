import assert from 'assert'
import reducer from './index'

it ('incremente vote pour id=1', () => {
  const action = {
    type: 'INCREMENT_VOTE',
    id: 1
  }
  const state = {
    candidates: [{ id: 1, color: '#E38627', name: 'Donald Trump', votes: 1, image: 'https://static.thetoptens.com/img/lists/6836.jpg' }]
  }
  const newState = reducer(state, action)
  const expected = {
    candidates: [{ id: 1, color: '#E38627', name: 'Donald Trump', votes: 2, image: 'https://static.thetoptens.com/img/lists/6836.jpg' }]
  }
  assert.deepStrictEqual(newState, expected)
})
