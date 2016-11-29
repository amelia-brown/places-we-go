import React from 'react';
import {search, select} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import throttle from 'lodash.throttle';

import styles from './styles.sass';

let term;

const ResultContainer = ({item, select, search}) => (
  <div
    key={item.id}
    onClick={() => {
      select({
        lat:item.geometry.location.lat(),
        lng:item.geometry.location.lng()
      })
      search('');
      term.value='';
    }}
    className='search-result'>
    <span>{item.name}</span>
    <i className='material-icons'>add</i>
  </div>
);

const mapResultDispatchToProps = (dispatch) => bindActionCreators({
  select,
  search,
}, dispatch);

const Result = connect(
  ()=>({}),
  mapResultDispatchToProps,
)(ResultContainer)

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
