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
  componentWillMount() {
    this.props.fetchRoute();
  }
  render() {
    const { workout, destroyWorkout, routes } = this.props;
    const icon = workout.biked ? 'bike-icon' : 'run-icon'
    // <span>Route: {route.title}</span>
    return (

      <li className="workout-feed-item">
        <div className={icon}></div>

        <div className="info">

          <Link
            className="feed-item-header"
            to={`/home/workouts/${workout.id}`}>
            { workout.title }
          </Link>

          <div className="date-time-info"></div>

          <div className="workout-info">

            <span> Duration: { workout.duration_string } </span> |
            <span> { workout.distance } mi</span>

          </div>

        </div>
      </li>
    );
  }
}

export default WorkoutFeedItem;
