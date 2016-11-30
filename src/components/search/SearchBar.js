import React from 'react';
import {search} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import debounce from 'lodash.debounce';

import SearchResults from './SearchResults';

let term;

const Search = ({results, search, map}) => (
  <div className='search'>
    <div className='search-container'>
      <input
        ref={(node) => term = node}
        placeholder='Find a place'
        onChange={debounce(() => search(term.value, map.coordinates), 500)} />
      <div className='search-button'
        onClick={() => search(term.value, map.coordinates)}>
        <i className='material-icons search-icon'>search</i>
      </div>
    </div>
    {
      results
      ? results.map((result) => <SearchResults item={result} term={term} />)
      : ''
    }
  </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  search,
}, dispatch);

const mapStateToProps = ({results, map}) => ({
  results,
  map,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
