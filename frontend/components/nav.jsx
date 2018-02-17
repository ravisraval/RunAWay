import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectUnlessLoggedIn = this.redirectUnlessLoggedIn.bind(this);
    this.redirectUnlessLoggedIn();
  }

  redirectUnlessLoggedIn() {
    if (!this.props.username){
      this.props.history.push('/');
    }
  }
  handleLogout(e) {
    e.preventDefault();
    // this.props.logout().then(this.props.history.push('/'));
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="nav-bar">
        <ul className="left-nav">
          <li className ="logo">
            <h3 className="logo-name">RunAWay</h3>
          </li>
          <li>
            <NavLink to='/home/workouts'><h4>Workouts</h4></NavLink>
          </li>
          <li>
            <NavLink to='/home/routes'><h4>Routes</h4></NavLink>
          </li>
          <li>
            <NavLink to='/home/stats'><h4>Stats</h4></NavLink>
          </li>
        </ul>
        <ul className="right-nav">
          <li className="user-prof">
            {this.props.username + "'s Profile"}
          </li>
          <li>
            <button className="session-link" onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
