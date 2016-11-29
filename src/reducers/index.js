import {combineReducers} from 'redux';

const initialSaved = localStorage.getItem('store')
  ? JSON.stringify(localStorage.getItem('store'))
  : {};

const initialCoordinates = {lat:37.7749, lng:-122.4194};
let generateId = () => uuid();

const saved = (state = initialSaved, action) => {
  switch (action.type) {
    case 'SAVE':
      return Object.assign({}, state, {
        [action.payload.name]: action.payload,
      })
    case 'REMOVE':
      let newObj = delete state[action.payload.name];
      return Object.assign({}, state, newObj);
    default:
      return state
  }
};

const map = (state = {coordinates:initialCoordinates}, action) => {
  switch (action.type) {
    case 'SELECT_FULFILLED':
      return Object.assign({}, state, {
        coordinates: {
          lat: action.payload.coordinates.lat,
          lng: action.payload.coordinates.lng,
        },
        address: action.payload.address,
        name: action.payload.name,
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
