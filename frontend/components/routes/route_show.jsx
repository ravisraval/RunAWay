import React from 'react';
import { Link } from 'react-router-dom';



class RouteShow extends React.Component {


  componentDidMount() {
    this.props.fetchRoute(this.props.routeId);
  }
  render() {
    const { route } = this.props;
    // <li>Elevation change: {route.elevation_change}</li>
    return (
    <div>
      <ul className="route-show">
        <li>Name: {route.name}</li>
        <li>Duration: {route.duration}</li>
        <li>Distance: {route.distance} miles</li>
        <li>Type: {route.travelMode}</li>
        {route.bike_ok ? <li> Bike Ok Route</li> : null}
        {route.run_ok ? <li> Run Ok Route</li>: null}
        <li>Notes: {route.notes}</li>
      </ul>
    </div>
  );
};
};

export default RouteShow;
