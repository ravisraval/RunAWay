import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from './landing_header';

class Landing extends React.Component{

  render() {
    return (
      <div>
        <LandingHeader/>
        <div className="landing-content">
          <button>Make your way</button>
        </div>
      </div>
    );
  }
};

export default Landing;
