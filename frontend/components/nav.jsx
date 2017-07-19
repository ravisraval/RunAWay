import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(this.state);
    this.handleLogout = this.handleLogout.bind(this);
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
            <Link to='/api/workouts'><h4>Workouts</h4></Link>
          </li>
          <li>
            <Link to='/api/routes'><h4>Routes</h4></Link>
          </li>
          <li>
            <Link to='/api/stats'>Stats</Link>
          </li>
          <li>
            <Link to='/api/profile'><button>{this.props.state.session.currentUser + "'s Profile"}</button></Link>
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
