import React from 'react';
import {search} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import throttle from 'lodash.throttle';

import styles from './styles.sass';

const Result = ({item}) => (
  <div
    key={item.id}
    className='search-result'>
    <span>{item.name}</span>
    <i className='material-icons'>add</i>
  </div>
);

let term;

const Search = ({results, search, map}) => (
  <div className='search'>
    <input
      ref={(node) => term = node}
      placeholder='Search'
      onChange={throttle(() => search(term.value, map), 1000)} />
    {
      results
      ? results.map((result) => <Result item={result} />)
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
