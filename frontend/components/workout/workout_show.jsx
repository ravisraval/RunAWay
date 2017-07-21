import React from 'react';
import { Link } from 'react-router-dom';


// const BenchShow = ({ workout, benchId, fetchBench }) => {
// <img className="index-image" src={workout.route.}/> put this in line 12.5
const WorkoutShow = ({ workout }) => {
  return (
    <div>
      <ul className="workout-show">
        <li>Title: {workout.title}</li>
        <li>Duration: {workout.duration}</li>
        <li>Distance: {workout.distance}</li>
        <li>Elevation change: {workout.elevation_change}</li>
        <li>Type: {workout.biked ? "Bike" : "Run"}</li>
        <li>Notes: {workout.notes}</li>
      </ul>
    </div>
  );
};
// };

export default WorkoutShow;
