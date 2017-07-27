import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import WorkoutFeedItemContainer from './workout_feed_item_container';


class WorkoutsFeed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    const {workouts} = this.props;
    if (!workouts) {return null};
    const workoutItems = this.props.workouts.map(workout => (
        <WorkoutFeedItemContainer
          key={ workout.id }
          workout={ workout }/>
      )
    );
    return (
    <div className="full-page-component">

      <h1 className="page-header">
        Workout Feed</h1>

      <div className="workouts-feed">

        <div className="workouts-index">
          <ul className="workout-list">
            {workoutItems}
          </ul>
        </div>

        <div className="workout-links">
          <Link to='/home/new_workout'><button className="new-workout-btn">Add a Workout</button></Link>
        </div>

      </div>

    </div>
    );
  }
}

export default withRouter(WorkoutsFeed);
