import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route } from 'react-router';
import RouteIndexItemContainer from './route_index_item_container';
import RouteShowContainer from './route_show_container';
import Modal from '../modal';

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {

    const routes = this.props.routes[0];
    if (!routes) return null;
    const routeItems = routes.sort().map(route => (
        <RouteIndexItemContainer
          key={ route.id }
          route={ route }
          openModal={this.openModal}
          closeModal={this.closeModal}
          />
      )
    );
    return (
      <div className="full-page-component">

        <Modal
          className="route-modal"
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
        >
          <Route path="/home/routes/:routeId"
                component={RouteShowContainer}
          />
        </Modal>

        <h1 className="page-header">Your Routes</h1>
        <ul className="routes-list">
          {routeItems}
        </ul>

        <Link to='/home/new_route'>
          <button className="new-route-btn">New Route</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(RoutesIndex);
