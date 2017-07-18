import React from 'react';
import { Link } from 'react-router-dom';


class LandingHeader extends React.Component{

  render() {

    return (
      <div className="landing-header">
        <ul>
          <li>
            <h3>RunAWay</h3>
          </li>
          <li>
            <input type="text" placeholder="Username"/>
          </li>
          <li>
            <input type="password" placeholder="Password"/>
          </li>
          <li>
            Remember Me<input type="checkbox" />
          </li>
          <li>
            <button>Log In</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LandingHeader;
