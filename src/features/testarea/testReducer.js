import {createReducer} from '../../app/common/util/reducerUtil';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
const inititialState = {
  data: 57
};

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
}

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
}

/*
const testReducer = (state = inititialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};*/

export default createReducer(inititialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
} )
