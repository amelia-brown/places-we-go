import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {remove, select} from '../../actions';

let icon;
const SavedItem = ({select, item, remove}) => (
  <div className='saved-item'>
    <div className='saved-item-text'
      onClick={() => {
        select(item)
      }}>
      <span className='saved-item-title'>{item.name}</span>
      <span className='saved-item-location'>{item.address}</span>
    </div>
    <div className='saved-item-action'
      onClick={() => remove(item.name)}>
      <i className='material-icons saved-item-icon outline'>
        favorite_outline
      </i>
      <i className='material-icons saved-item-icon'>
        favorite
      </i>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  remove,
  select,
}, dispatch)

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SavedItem)
