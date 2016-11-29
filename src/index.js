import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

import persist from './utils/persist';
import MapContainer from './components/map';
import Search from './components/search';

import styles from './main.sass';

const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware(),
  ),
);

const App = () => (
  <Provider store={store}>
    <div>
      <MapContainer />
      <Search />
    </div>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('mount'));
