import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../../actions';
import {bindActionCreators} from 'redux';

import {loadMarkers} from '../../utils/api';
import {savedItemsToArray} from '../../utils/persist';

import styles from './styles';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.select(this.props.map);
    this.loadInitialMarkers();
  }

  loadInitialMarkers() {
    let savedLocations = localStorage.getItem('store');
    if (savedLocations) {
      savedLocations = JSON.parse(savedLocations);
      return loadMarkers(savedItemsToArray(savedLocations));
    }
  }

  render() {
    return (
      <div id='map'>
      </div>
    )
  }
}

const mapStateToProps = ({map}) => ({
  map,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  select,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

