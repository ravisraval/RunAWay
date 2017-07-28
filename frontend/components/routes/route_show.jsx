import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShowMap from './show_map'
//try making this a modal


class RouteShow extends React.Component {
  constructor(props){
    super(props);
    this.displayDuration = this.displayDuration.bind(this);
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

  componentDidMount() {
    this.props.fetchRoute(this.props.routeId);
  }

  render() {
    const { route } = this.props;
    // <li>Elevation change: {route.elevation_change}</li>
    return (
    <div ref="map-show">
      <ul className="route-show">
        <ShowMap route={route} />
        <li>Name: {route.name}</li>
        <li>Duration: {this.displayDuration()}</li>
        <li>Distance: {Math.round(100 * route.distance / 1609.34) / 100} miles</li>
        <li>Type: {route.travel_mode}</li>
        {route.bike_ok ? <li> Bike Ok Route</li> : null}
        {route.run_ok ? <li> Run Ok Route</li>: null}
        <li>Notes: {route.notes}</li>
      </ul>
    </div>
  );
};
};

export default RouteShow;
