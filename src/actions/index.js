import {searchMaps, loadMap} from '../utils/api';

export const search = (term, map) => ({
  type: 'SEARCH',
  payload: searchMaps(term, map),
})

export const select = (options) => ({
  type: 'SELECT',
  payload: loadMap(options),
})

export const save = (options) => ({
  type: 'SAVE',
  payload: options,
})

export const remove = (id) => ({
  type: 'REMOVE',
  payload: options,
})
