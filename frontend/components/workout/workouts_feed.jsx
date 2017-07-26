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
      <div className="workouts-feed">
        <ul className="workout-list">
          {workoutItems}
        </ul>

        <Link to='/home/new_workout'><button className="new-workout-btn">New Workout</button></Link>
      </div>
    );
  }
}

export default withRouter(WorkoutsFeed);
