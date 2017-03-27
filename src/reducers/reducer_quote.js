import { FETCH_QUOTE, BUY_SHARES } from '../actions/index'

export default function(state = {}, action) {
  switch (action.type){
    case FETCH_QUOTE:
    return  { quote: action.payload, ...state };
    case BUY_SHARES:
    return  { owned: [...state.owned, action.payload], ...state };
  }

  return state;
}
