import React from 'react';
import {search, select} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import throttle from 'lodash.throttle';

const ResultContainer = ({item, select, search, term}) => (
  <div
    key={item.id}
    onClick={() => {
      select({
        coordinates:{
          lat:item.geometry.location.lat(),
          lng:item.geometry.location.lng(),
        },
        name: item.name,
        address: item.vicinity,
      })
      search('');
      term.value='';
    }}
    className='search-result'>
    <span>{item.name}</span>
    <i className='material-icons'>place</i>
  </div>
);

const mapDispatchToProps = (dispatch) => bindActionCreators({
  select,
  search,
}, dispatch);

export default connect(
  ()=>({}),
  mapDispatchToProps,
)(ResultContainer)




