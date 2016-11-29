import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {save} from '../../actions';

let SearchDialog = ({map, save}) => (
  <div className='search-dialog'>
    <span className='search-dialog-name'>{map.name}</span>
    <span className='search-dialog-address'>{map.address}</span>
    <i className='material-icons'
       onClick={() => {console.log('clicked'); save(map)}}>
        favorite
    </i>
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
