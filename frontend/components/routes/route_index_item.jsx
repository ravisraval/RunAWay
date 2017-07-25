import React from 'react';
import { Link } from 'react-router-dom';

// <img src="https://www.maps.com/media/catalog/product/cache/1/thumbnail/2500x/17f82f742ffe127f42dca9de82fb58b1/2/0/200002_us_political_im_z.jpg" alt={workout.title} />
class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

  }
  handleDelete(){
    this.props.destroyRoute()
  }

  render() {
    const { route, destroyRoute } = this.props;
  console.log(route);
    return (

      // <span> { route.elevation_change } </span>
      <li className="route-feed-item">
        <Link to={`/home/routes/${route.id}`}>
          <span> Name: { route.name } </span>

          <span> Duration: { route.duration } </span>
          <span> Distance: { route.distance } </span>
          <li>Type: {route.travel_mode}</li>
          {route.bike_ok ? <li> Bike Ok Route</li> : null}
          {route.run_ok ? <li> Run Ok Route</li>: null}
        </Link>

        <button onClick={this.handleDelete} className="delete-button">Delete</button>
        <Link to={`home/routes/${route.id}/edit`}>
          <button className="edit-button">Edit</button>
        </Link>
      </li>
    );
  }
}

export default RouteIndexItem;
