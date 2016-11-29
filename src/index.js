import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {initMap, getPlace} from './utils/api';

import styles from './main.sass';

class Map extends Component {
  componentDidMount () {
    initMap();
  }

  render() {
    return (
      <div id='map'></div>
    )
  }
}



const App = () => (
  <div>
    <div>Hello World</div>
    <Map />
  </div>
)

ReactDOM.render(<App/>, document.getElementById('mount'));
