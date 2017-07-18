import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from './landing_header';

class Landing extends React.Component{

  render() {
    return (
      <div>
        <LandingHeader/>
        <h1>Welcome to RunAWay</h1>
        <h2>For when you just need to run away</h2>
      </div>
    );
  }
};

export default Landing;
