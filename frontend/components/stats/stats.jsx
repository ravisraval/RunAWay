import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Stats extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    const {workouts} = this.props;

    return(
      <div className="stats-page" className="full-page-component">
        <h1 className="page-header">{this.props.username}s statistics</h1>
        <div className="personal-stats">
          <h2>Personal Stats</h2>
          <div className="personal-stats-list">
            <h3>Combined Cycling & Running Totals</h3>
              <span>Workouts: </span>
              <span>Distance Traveled: </span>
              <span>Duration: </span>
            <h3>Cycling Totals</h3>
              <span>Workouts: </span>
              <span>Distance Traveled: </span>
              <span>Duration: </span>
              <span>Longest ride:</span>
              <span>Farthest ride:</span>
            <h3>Running Totals</h3>
              <span>Workouts: </span>
              <span>Distance Traveled: </span>
              <span>Duration: </span>
              <span>Longest run:</span>
              <span>Farthest ride:</span>
          </div>
        </div>
        <div className="global-stats">
          <h2>Global Stats</h2>
          <div className="global-stats-list">
            <h3>Combined Cycling & Running Totals</h3>
              <span>Workouts: </span>
              <span>Distance Traveled: </span>
              <span>Duration: </span>
            <h3>Cycling Totals</h3>
              <span>Workouts: </span>
              <span>Distance Traveled: </span>
              <span>Duration: </span>
              <span>Longest ride:</span>
              <span>Farthest ride:</span>
            <h3>Running Totals</h3>
              <span>Workouts: </span>
              <span>Distance Traveled: </span>
              <span>Duration: </span>
              <span>Longest run:</span>
              <span>Farthest ride:</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
