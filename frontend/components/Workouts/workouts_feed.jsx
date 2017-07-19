import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WorkoutsFeed extends React.Component {

  render() {
    return (
      <div className="workouts-feed">
        <h1>Workouts</h1>
      </div>
    );
  }
}

export default withRouter(WorkoutsFeed);
