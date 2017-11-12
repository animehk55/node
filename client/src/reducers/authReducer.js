import { FETCH_USER, FETCH_CURRENTUSER } from '../actions/types';


export default function(state = null, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case FETCH_CURRENTUSER:
      return action.payload || false;
    default:
      return state;
  }
}
