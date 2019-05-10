const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          target: action.target,
          text: action.text
        }
      ]
    case 'REMOVE_MESSAGE':
    console.log(action.id)
      return state.filter(({id}) => id !== action.id);
    default:
      return state
  }
}

export default messages