import Type from '../types'

const testData = [
  { id: 't1', label: 'fist todo', comments: [] },
  { id: 't2', label: 'second todo', comments: [] },
  { id: 't3', label: 'third todo', comments: [] },
]

const initialState = {
  list: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_TODO:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}
export default reducer
