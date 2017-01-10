import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // don't mutate, return a new state with old and new values
      // concats at end
      // return state.concat([ action.payload.data ]);
      // concats at front not end
      return [ action.payload.data, ...state];
  }
  return state;
}