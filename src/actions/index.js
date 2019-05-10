export const addMessage = (id, target, text) => ({
  type: 'ADD_MESSAGE',
  id: id,
  target,
  text
})
export const removeMessage = id => ({
  type: 'REMOVE_MESSAGE',
  id
})