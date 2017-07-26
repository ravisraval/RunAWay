import React from 'react';
import { Link } from 'react-router-dom';
import SmallMap from './small_map';

// <img src="https://www.maps.com/media/catalog/product/cache/1/thumbnail/2500x/17f82f742ffe127f42dca9de82fb58b1/2/0/200002_us_political_im_z.jpg" alt={workout.title} />
class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

  }
  handleDelete(){
    this.props.destroyRoute();
    this.props.router.push('/home/routes');
  }

  render() {
    const { route, destroyRoute } = this.props;
    return (
      // <span> { route.elevation_change } </span>
      <li className="route-feed-item">
        <Link to={`/home/routes/${route.id}`}>
          <SmallMap route={route}/>
          <span className="route-name-index">{ route.name } </span>
        </Link>
          <span> Duration: { route.duration } </span>
          <span> Distance: { route.distance } </span>
          <span>Type: {route.travel_mode}</span>
          {route.bike_ok ? <span> Bike Ok Route</span> : null}
          {route.run_ok ? <span> Run Ok Route</span>: null}

        <button onClick={this.handleDelete} className="delete-button">Delete</button>
      </li>
    );
  }
}

export default RouteIndexItem;
