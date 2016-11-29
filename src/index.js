import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/map';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

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
    </div>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('mount'));
