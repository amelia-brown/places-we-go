import {loadMarkers} from './api';

export const savedItemsToArray = (saved) => {
  let savedItems = [];
  for (var key in saved) {
    let item = {
      name: saved[key],
      coordinates: saved[key].coordinates,
      name: saved[key].name,
      address: saved[key].address,
    }
    savedItems.push(item);
  }
  return savedItems;
}

export default store => next => action => {
  let prevStorage = localStorage.getItem('store');
  let nextStorage
  prevStorage = prevStorage ? JSON.parse(prevStorage) : {};
  switch (action.type) {
    case 'SAVE':
      nextStorage = Object.assign({}, prevStorage, {
        [action.payload.name]: action.payload,
           })
      try {
        localStorage.setItem('store', JSON.stringify(nextStorage));
        loadMarkers(savedItemsToArray(nextStorage));
      }
      catch(e) {
        console.log('could not save to local storage, ', e);
      }
      return next(action);
    case 'REMOVE':
      let newObj = delete prevStorage[action.payload];
      let nextStorage = Object.assign({}, prevStorage, newObj);
      try {
        localStorage.setItem('store', JSON.stringify(nextStorage));
        loadMarkers(savedItemsToArray(nextStorage));
     }
      catch(e) {
        console.log('could not save to local storage, ', e);
      }
      return next(action);
    default:
      return next(action);
  }
}


