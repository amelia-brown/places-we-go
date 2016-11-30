import React from 'react';
import {search, select} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const SearchResults = ({item, select, search, term}) => (
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
      <div className='search-result-text'>
        <span className='search-result-name'>{item.name}</span>
        <span className='search-result-address'>{item.vicinity}</span>
      </div>
    <i className='material-icons search-result-icon'>place</i>
  </div>
);

const mapDispatchToProps = (dispatch) => bindActionCreators({
  select,
  search,
}, dispatch);

export default connect(
  ()=>({}),
  mapDispatchToProps,
)(SearchResults)
