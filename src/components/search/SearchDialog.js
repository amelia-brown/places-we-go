import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {save} from '../../actions';

let SearchDialog = ({map, save}) => (
  <div className='search-dialog'>
    <div className='search-dialog-text'>
      <span className='search-dialog-name'>{map.name}</span>
      <span className='search-dialog-address'>{map.address}</span>
    </div>
    <div className='search-dialog-action'>
      <i className='material-icons search-dialog-icon'
         onClick={() => {console.log('clicked'); save(map)}}>
          favorite
      </i>
    </div>
  </div>
);

const mapStateToProps = ({map}) => ({
  map,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  save,
}, dispatch);

export default SearchDialog = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDialog);
