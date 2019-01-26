export function manageFriends(state = { friends: [{name: 'Avi', hometown: 'NYC', id: 100}] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {...state, friends: [...state.friends.filter(friend => friend.id !== action.id)]}
    default:
      return state
  }
}
