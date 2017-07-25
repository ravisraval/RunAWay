import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const {routes} = this.props;
    if (!routes) {return null};
    const routeItems = this.props.routes.map(route => (
        <RouteIndextemContainer
          key={ route.id }
          route={ route }/>
      )
    );
    return (
      <div className="routes-index-page">
        <h1>dem routes</h1>
        <ul className="routes-list">
        </ul>

        <Link to='/home/new_route'><button className="new-route-btn">New Route</button></Link>
      </div>
    );
  }
}

export default withRouter(RoutesIndex);
