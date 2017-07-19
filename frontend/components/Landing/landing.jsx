import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeaderContainer from './landing_header_container';

class Landing extends React.Component{

  render() {
    return (
      <div>
        <LandingHeaderContainer/>
        <div className="landing-content">
          <button>Make your way</button>
        </div>
      </div>
    );
  }
};

export default Landing;
