import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RouteIndexItemContainer from './route_index_item_container';
import Modal from '../modal';

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
    const routeItems = routes.sort().map(route => (
        <RouteIndexItemContainer
          key={ route.id }
          route={ route }/>
      )
    );
    return (
      <div className="full-page-component">
        <h1 className="page-header">Your Routes</h1>
        <ul className="routes-list">
          {routeItems}
        </ul>
        <Link to='/home/new_route'><button className="new-route-btn">New Route</button></Link>

      </div>
    );
  }
}

export default withRouter(RoutesIndex);
