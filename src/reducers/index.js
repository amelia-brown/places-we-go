import {combineReducers} from 'redux';

const initialSaved = localStorage.getItem('store')
  ? JSON.parse(localStorage.getItem('store'))
  : {};

const initialCoordinates = {lat:37.7749, lng:-122.4194};
let generateId = () => uuid();

const savedDisplay = (state = {hidden: true}, action) => {
  switch (action.type) {
    case 'TOGGLE_SAVED':
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state;
  }
}

const saved = (state = initialSaved, action) => {
  switch (action.type) {
    case 'SAVE':
      return Object.assign({}, state, {
        [action.payload.name]: action.payload,
      })
    case 'REMOVE':
      let newObj = delete state[action.payload];
      return Object.assign({}, state, newObj);
    default:
      return state
  }
};

const map = (state = {coordinates:initialCoordinates}, action) => {
  switch (action.type) {
    case 'SELECT_FULFILLED':
      console.log('xxx',action.payload);
      return Object.assign({}, state, {
        coordinates: {
          lat: action.payload.coordinates.lat,
          lng: action.payload.coordinates.lng,
        },
        address: action.payload.address,
        name: action.payload.name,
      })
    case 'CLEAR_DIALOG':
      let newMap = {coordinates: state.coordinates}
      return newMap;
    default:
      return state
  }
};

const results = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'SEARCH_FULFILLED':
      let results = action.payload.slice(0,5);
      return results
    default:
      return state
  }
}

const rootReducer = combineReducers({
  saved,
  map,
  results,
  savedDisplay,
});

export default rootReducer;
