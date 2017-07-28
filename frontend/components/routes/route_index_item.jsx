import React from 'react';
import { Link } from 'react-router-dom';
import SmallMap from './small_map';

// <img src="https://www.maps.com/media/catalog/product/cache/1/thumbnail/2500x/17f82f742ffe127f42dca9de82fb58b1/2/0/200002_us_political_im_z.jpg" alt={workout.title} />
class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayDuration = this.displayDuration.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    console.log("below is props");
    console.log(this.props);
  }

  handleDelete(){
    this.props.destroyRoute();
    this.props.router.push('/home/routes');
  }

  displayDuration() {
    let hsep = "";
    let msep = "";
    let ssep = "";
    let sec = this.props.route.duration;
    let hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    let minutes = Math.floor(sec / 60);
    sec -= minutes * 60;
    if (hours < 10) {hsep = "0" };
    if (minutes < 10) {msep = "0" };
    if (sec < 10) {ssep = "0" };
    return `${hsep}${hours}:${msep}${minutes}:${ssep}${sec}`;
  }

  render() {
    const { route, destroyRoute } = this.props
    return (
      // <span> { route.elevation_change } </span>
      <li className="route-feed-item">
        <Link onClick={this.openModal} to={`/home/routes/${route.id}`}>
          <SmallMap route={route}/>
          <h5 className="route-name-index">{ route.name } </h5>
        </Link>
        <ul className="route-friendly-list">
          {route.bike_ok ? <li> Bike Friendly</li> : null}
          {route.run_ok ? <li> Run Friendly</li>: null}
        </ul>
          <span> Duration: { this.displayDuration() }</span>
          <span> Distance: {
              Math.round(100 * route.distance / 1609.34) / 100} m
             </span>
         <button onClick={this.handleDelete} className="delete-button" className="delete-route">Delete</button>
          <span className="created-as-item">Created as a {
              (route.travel_mode === "BICYCLING")
               ? "cycling" : "running"
             } route on { route.created_at.split("T")[0] }.</span>
      </li>
    );
  }
}

export default RouteIndexItem;
