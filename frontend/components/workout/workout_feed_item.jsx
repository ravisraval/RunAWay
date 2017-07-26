import React from 'react';
import { Link } from 'react-router-dom';

// <img src="https://www.maps.com/media/catalog/product/cache/1/thumbnail/2500x/17f82f742ffe127f42dca9de82fb58b1/2/0/200002_us_political_im_z.jpg" alt={workout.title} />
class WorkoutFeedItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleDelete = this.handleDelete.bind(this);

  }
  handleDelete(){
    this.props.destroyWorkout()
  }
  componentDidMount() {
    this.props.fetchRoute();
  }
  render() {
    const { workout, destroyWorkout, routes } = this.props;
    // <span>Route: {route.title}</span>
    return (

      <li className="workout-feed-item">
        <Link to={`/home/workouts/${workout.id}`}>
          <span> { workout.title } </span>
          <span> { workout.duration } </span>
        <span> { workout.distance } </span>
        <span> { workout.elevation_change } </span>
      </Link>
      <button onClick={this.handleDelete} className="delete-button">Delete</button>
      </li>
    );
  }
}

export default WorkoutFeedItem;
