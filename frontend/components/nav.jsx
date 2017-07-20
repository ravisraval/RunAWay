import React from 'react';
import { Link } from 'react-router-dom';


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
    this.props.logout().then(this.props.history.push('/'));
  }

  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <h3>RunAWay</h3>
          </li>
          <li>
            <Link to='/home/workouts'><h4>Workouts</h4></Link>
          </li>
          <li>
            <Link to='/home/routes'><h4>Routes</h4></Link>
          </li>
          <li>
            <Link to='/home/stats'><h4>Stats</h4></Link>
          </li>
          <li>
            <Link to='/home/profile'><button>{this.props.username + "'s Profile"}</button></Link>
          </li>
          <li>
            <button onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
