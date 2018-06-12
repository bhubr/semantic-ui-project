/* global it */
import assert from 'assert'
import reducer from './index'

it('increments votes on candidate with id = 1', () => {
  const state = {
    candidates: [
      { id: 1, color: '#E38627', name: 'Donald Trump', votes: 1, image: 'https://static.thetoptens.com/img/lists/6836.jpg' }
    ]
  }
  const action = {
    type: 'INCREMENT_VOTE',
    id: 1
  }
  const newState = reducer(state, action)
  const expected = {
    candidates: [
      { id: 1, color: '#E38627', name: 'Donald Trump', votes: 2, image: 'https://static.thetoptens.com/img/lists/6836.jpg' }
    ]
  }
  assert.deepStrictEqual(newState, expected)
})
