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

    return (

      <li className="route-feed-item">
        <Link to={`/home/routes/${route.id}`}>
          <span> { route.title } </span>
          <span> { route.duration } </span>
        <span> { route.distance } </span>
        <span> { route.elevation_change } </span>
      </Link>

      <button onClick={this.handleDelete} className="delete-button">Delete</button>


      </li>
    );
  }
}

export default RouteIndexItem;
