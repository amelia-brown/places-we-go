import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../../actions';
import {bindActionCreators} from 'redux';

import styles from './styles';

class MapContainer extends Component {
  componentDidMount () {
    this.props.select(this.props.map);
  }

  render() {
    return (
      <div id='map'></div>
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

