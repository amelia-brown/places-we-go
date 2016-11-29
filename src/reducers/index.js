import {combineReducers} from 'redux';
import uuid from 'uuid';

const initialCoordinates = {lat:37.7749, lng:-122.4194};
let generateId = () => new uuid();

const saved = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE':
      let id = generateId();
      return Object.assign({}, state, {
        id: action.payload,
      })
    case 'REMOVE':
      let newObj = delete state.id
      return Object.assign({}, state, newObj);
    default:
      return state
  }
};

const map = (state = initialCoordinates, action) => {
  switch (action.type) {
    case 'SELECT_FULFILLED':
      return Object.assign({}, state, {
        lat: action.payload.lat,
        lng: action.payload.lng,
      })
    default:
      return state
  }
};

const results = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_FULFILLED':
      return action.payload;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  saved,
  map,
  results,
});

export default rootReducer;
