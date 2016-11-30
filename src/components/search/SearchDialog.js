import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {save, clearDialog} from '../../actions';

class SearchDialog extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.getElementById('dialog').focus();
  }
  render() {
    let {map, save, clearDialog, saved} = this.props;
    return (
      <div
        id='dialog'
        tabIndex='0'
        className='search-dialog'
        onBlur={clearDialog}>
        <div className='search-dialog-text'>
          <span className='search-dialog-name'>{map.name}</span>
          <span className='search-dialog-address'>{map.address}</span>
        </div>
        <div className='search-dialog-action'>
          {console.log('xx', saved[map.name])}
          <i className={`material-icons search-dialog-icon ${saved[map.name] ? 'black' : ''}`}
            onClick={() => save(map)}>
            favorite
          </i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({map, saved}) => ({
  map,
  saved,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  save,
  clearDialog,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDialog);
