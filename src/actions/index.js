import {searchMaps, loadMap} from '../utils/api';

export const search = (term, map) => ({
  type: 'SEARCH',
  payload: searchMaps(term, map),
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
