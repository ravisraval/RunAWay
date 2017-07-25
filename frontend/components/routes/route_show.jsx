import React from 'react';
import { Link } from 'react-router-dom';



class RouteShow extends React.Component {


  componentDidMount() {
    this.props.fetchRoute(this.props.routeId);
  }
  render() {
    const { route } = this.props;
    return (
    <div>
      <ul className="route-show">
        <li>Title: {route.title}</li>
        <li>Duration: {route.duration}</li>
        <li>Distance: {route.distance} miles</li>
        <li>Elevation change: {route.elevation_change}</li>
        <li>Type: {route.biked ? "Bike" : "Run"}</li>
        <li>Notes: {route.notes}</li>
      </ul>
    </div>
  );
};
};

export default RouteShow;
