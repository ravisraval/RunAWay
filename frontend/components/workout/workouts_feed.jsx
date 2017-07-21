import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WorkoutsFeed extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    return (
      <div className="workouts-feed">
        <h1>hi david</h1>


        <Link to='/home/workouts/new'><button>New Workout</button></Link>

      </div>
    );
  }
}

export default withRouter(WorkoutsFeed);
