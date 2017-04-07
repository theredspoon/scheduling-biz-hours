import React, { Component} from 'react';
import {connect} from 'react-redux';
import DeleteButton from './deleteButton';
import twelve from 'twentyfour-to-twelve';

const mapStateToProps = (state) => ({ schedule: state.schedule });

class SchedulingDisplay extends Component {

  render() {
    let blocks = this.props.schedule;
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Start Day</th>
              <th>Start Time</th>
              <th>End Day</th>
              <th>End Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {blocks.map((block, index) => {

              if (block.id === undefined ) {
                return; /* eslint array-callback-return: "off" */
              }

              return (
                <tr key={index}>
                  <td>{weekdays[block.start_weekday]}</td>
                  <td>{twelve(block.start_time)}</td>
                  <td>{weekdays[block.end_weekday]}</td>
                  <td>{twelve(block.end_time)}</td>
                  <td>
                    <DeleteButton blockId={block.id}></DeleteButton>
                  </td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SchedulingDisplay);