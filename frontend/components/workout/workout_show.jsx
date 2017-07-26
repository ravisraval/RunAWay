import React from 'react';
import { Link } from 'react-router-dom';


// const BenchShow = ({ workout, benchId, fetchBench }) => {
// <img className="index-image" src={workout.route.}/> put this in line 12.5
class WorkoutShow extends React.Component {


  componentDidMount() {
    this.props.fetchWorkout(this.props.workoutId);
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

          <button onClick={this.props.destroyWorkout} className="delete-button">Delete</button>

    </div>
  );
};
};

export default WorkoutShow;
