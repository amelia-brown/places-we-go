import React from 'react';
import {connect} from 'react-redux';

import SavedToggle from './SavedToggle';
import SavedItem from './SavedItem';
import {savedItemsToArray} from '../../utils/persist';

import styles from './styles';

const Saved = ({saved, savedDisplay}) => {
  let savedItems = savedItemsToArray(saved);
  if (savedDisplay.hidden === false) {
      return (
        <div className='show saved-sidebar'>
          <div className='saved-container'>
            {
              savedItems.length > 0
                ? savedItems.map(item => <SavedItem item={item} />)
                : <div className='saved-empty-text'>You have no saved items</div>
            }
          </div>
          <SavedToggle />
        </div>
      );
  }
  return (
    <div className='hide saved-sidebar'>
      <SavedToggle />
    </div>
  )
}

const mapStateToProps = ({saved, savedDisplay}) => ({
  saved,
  savedDisplay
});

export default connect(
  mapStateToProps,
)(Saved);
