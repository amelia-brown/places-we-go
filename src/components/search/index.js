import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar';
import SearchDialog from './SearchDialog';
import SearchResults from './SearchResults';

import styles from './styles.sass';


const Search = ({map}) => (
  <div>
    <SearchBar />
    { map.name
      ? <SearchDialog />
      : ''
    }
  </div>
)

const mapStateToProps = ({map}) => ({
  map,
});

export default connect(
  mapStateToProps,
)(Search);
