import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {remove} from '../../actions';

const SavedItem = ({item, remove}) => (
  <div className='saved-item'>
    <div className='saved-item-text'>
      <span className='saved-item-title'>{item.name}</span>
      <span className='saved-item-location'>{item.address}</span>
    </div>
    <div className='saved-item-action'>
      <i
        className='material-icons saved-item-icon'
        onClick={() => remove(item.name)}>
        favorite_outline
      </i>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  remove,
}, dispatch)

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SavedItem)
