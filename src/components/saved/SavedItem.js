import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {remove} from '../../actions';

let icon;
const SavedItem = ({item, remove}) => (
  <div className='saved-item'>
    <div className='saved-item-text'>
      <span className='saved-item-title'>{item.name}</span>
      <span className='saved-item-location'>{item.address}</span>
    </div>
    <div className='saved-item-action'
      onClick={() => remove(item.name)}>
      <i className='material-icons saved-item-icon outline'>
        favorite_outline
      </i>  <i className='material-icons saved-item-icon'>
        favorite
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
