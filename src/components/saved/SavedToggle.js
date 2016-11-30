import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSaved} from '../../actions';

const SavedToggle = ({toggleSaved, savedDisplay}) => (
  <div className='saved-sidebar-toggle'
       onClick={toggleSaved}>
    <i className='material-icons'>
      { savedDisplay.hidden
        ? 'menu'
        : 'close'
      }
    </i>
  </div>
)

const mapStateToProps = ({savedDisplay}) => ({
  savedDisplay,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleSaved,
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedToggle);
