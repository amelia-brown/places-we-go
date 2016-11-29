import {searchMaps, loadMap} from '../utils/api';

export const search = (term) => ({
  type: 'SEARCH',
  payload: search(term),
})

export const select = (coordinates) => ({
  type: 'SELECT',
  payload: loadMap(coordinates),
})

export const save = (options) => ({
  type: 'SAVE',
  payload: options,
})

export const remove = (id) => ({
  type: 'REMOVE',
  payload: options,
})
