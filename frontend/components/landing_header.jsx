import React from 'react';
import { Link } from 'react-router-dom';

class LandingHeader extends React.Component{

  render() {

    return (
      <div>
        <ul>
          <li>
            <h3>RunAWay</h3>
            </li>
          <li>
            <button>Sign Up</button>
          </li>
          <li>
            <button>Log In</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LandingHeader;
