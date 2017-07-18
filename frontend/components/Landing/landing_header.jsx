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
            <button>Log In</button>
          </li>
          <li>
            <Link to='/api/signup'><button>Sign Up</button></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default LandingHeader;
