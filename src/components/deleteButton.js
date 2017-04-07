import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBlock } from '../actions/deleteBlockActionCreator';

const mapStateToProps = (state) => ({ schedule: state.schedule });

const mapDispatchToProps = (dispatch) =>
  ({
    onDeleteClick: (schedule) => {
      dispatch(deleteBlock(schedule))
    }
  });

class DeleteButton extends Component {

  render() {

    const blockId = this.props.blockId;
    let oldSchedule = this.props.schedule;
    let blockIndex;

    /* Get the index number of the time block to be deleted */
    for (let i = 0, l = oldSchedule.length; i < l; i++) {
      if (oldSchedule[i].id === blockId) {
        blockIndex = i;
        break;
      }
    }

    /* Create a new array with the time block removed */
    let newSchedule = oldSchedule.slice(0, blockIndex).concat(oldSchedule.slice(blockIndex + 1));
    
    return (<button
      onClick={() => this.props.onDeleteClick(newSchedule)}
      className="btn btn-danger"
    >
      Delete
    </button>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
