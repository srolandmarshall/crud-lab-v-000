
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      const restaurant = {
        id: cuid(),
        text: action.name
      }
      console.log(restaurant)
      console.log([...state.restaurants, restaurant])
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    default:
      return state;
  }
}
