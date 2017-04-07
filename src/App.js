import React, { Component } from 'react';
import './App.css';
import SchedulingForm from './components/schedulingForm';
import SchedulingDisplay from './components/schedulingDisplay';
import { connect } from 'react-redux';
import { addBlock } from './actions/addBlockActionCreator';

let id = 0;
const counter = () => {
  id++;
  return id;
};

const mapStateToProps = (state) => ({ schedule: state.schedule });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (block) => {
    dispatch(addBlock(block));
  }
});

class App extends Component {
  render() {
    let newSchedule = this.props.schedule;

    /* Adds a new time block to the schedule once the form is submitted */
    let submit = (block) => {

      /* add an id to the time block */
      block.id = counter();

      /* handle logic for the time block spanning more than a week */
      if (block.end_weekday < block.start_weekday) {
        block.spans_week = true;
      } else {
        block.spans_week = false;
      }

      newSchedule = newSchedule.concat([block]);
      this.props.onSubmit(newSchedule);
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>Schedule Business Hours at RideCell</h2>
        </div>
        <div>
          <h3>New Service Time</h3>
          <SchedulingForm onSubmit={submit} />
        </div>
        <div>
          <h3>Active Service Times</h3>
          <SchedulingDisplay />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
