import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WorkoutShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount() {
    this.props.fetchWorkout(this.props.workoutId);
  }

  handleDelete(e) {
    this.props.destroyWorkout(this.props.workout)
    .then( () => this.props.history.push('/home/workouts'))
  }

  render() {
    const { workout } = this.props;
    return (
    <div className="full-page-component">
      <h1 className="page-header">{workout.title}</h1>
      <ul className="workout-show">
        <li>Duration: {workout.duration_string}</li>
        <li>Distance: {workout.distance} miles</li>
        <li>Elevation change: {workout.elevation_change}</li>
        <li>Type: {workout.biked ? "Bike" : "Run"}</li>
        <li>Notes: {workout.notes}</li>
      </ul>

      <button
        onClick={this.handleDelete} className="delete-button"
      >
        Delete
      </button>

    </div>
    );
  };
};

export default withRouter(WorkoutShow);
