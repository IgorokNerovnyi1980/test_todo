import Type from '../types'

const initialState = {
  list: [],
  current: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_TODO:
      return {
        ...state,
        list: action.payload,
      }
    case Type.SET_CURRENT:
      return {
        ...state,
        current: action.id,
      }
    case Type.CREATE:
      return {
        ...state,
        list: [...state.list, action.todo],
      }
    case Type.DELETE:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.id),
      }
    case Type.SET_COMMENT:
      return {
        ...state,
        list: state.list.map(obj => {
          if (action.id === obj.id) {
            return { ...obj, comments: [...obj.comments, action.comment] }
          } else {
            return obj
          }
        }),
      }

    default:
      return state
  }
}
export default reducer
