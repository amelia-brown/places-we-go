import React from 'react';
import {search} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import throttle from 'lodash.throttle';

import Result from './SearchResults';

let term;

const Search = ({results, search, map}) => (
  <div className='search'>
    <input
      ref={(node) => term = node}
      placeholder='Search'
      onChange={throttle(() => search(term.value, map.coordinates), 500)} />
    {
      results
      ? results.map((result) => <Result item={result} term={term} />)
      : ''
    }
  </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  search,
}, dispatch);

const mapStateToProps = ({results, map}) => {
  return {
  results,
  map,
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
