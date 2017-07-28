import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Stats extends React.Component {
  constructor() {
    super();
    this.displayDuration = this.displayDuration.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  displayDuration(dura) {
    let hsep = "";
    let msep = "";
    let ssep = "";
    let sec = dura;
    let hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    let minutes = Math.floor(sec / 60);
    sec -= minutes * 60;
    if (hours < 10) {hsep = "0" };
    if (minutes < 10) {msep = "0" };
    if (sec < 10) {ssep = "0" };
    return `${hsep}${hours}:${msep}${minutes}:${ssep}${sec}`;
  }

  render() {
    const {workouts} = this.props;
    let totalDistance = 0;
    let totalDuration = 0;
    let totalRides = 0;
    let totalCyclingDistance = 0;
    let totalCyclingDuration = 0;
    let longestRide = 0;
    let farthestRide = 0;
    let totalRuns = 0;
    let totalRunningDistance = 0;
    let totalRunningDuration = 0;
    let longestRun = 0;
    let farthestRun = 0;
    workouts.forEach(workout => {
      totalDuration += workout.duration;
      totalDistance += workout.distance;
      if (workout.biked) {
        totalRides += 1;
        totalCyclingDuration += workout.duration;
        totalCyclingDistance += workout.distance;
        if (workout.duration > longestRide) {
          longestRide = workout.duration;
        }
        if (workout.distance > farthestRide) {
          farthestRide = workout.duration;
        }
      } else {
        totalRuns += 1;
        totalRunningDuration += workout.duration;
        totalRunningDistance += workout.distance;
        if (workout.duration > longestRun) {
          longestRun = workout.duration;
        }
        if (workout.distance > farthestRun) {
          farthestRun = workout.duration;
        }
      }
    });

    return(
      <div className="stats-page" className="full-page-component">
        <h1 className="page-header">Statistics for {this.props.username}</h1>
        <div className="personal-stats">
          <div className="personal-stats-list">
            <h3 className="combined-stats">Combined Cycling & Running Totals</h3>
              <span>Workouts: {workouts.length}</span>
              <span>Distance Traveled: {totalDistance}</span>
              <span>Duration: {this.displayDuration(totalDuration)}</span>
            <div className="separated-stats">
              <div className="cycling-stats">
                <h3>Cycling Totals</h3>
                <span>Workouts: {totalRides}</span>
                <span>Distance Traveled: {totalCyclingDistance}</span>
                <span>Duration: {totalCyclingDuration}</span>
                <span>Longest ride:{longestRide}</span>
                <span>Farthest ride:{farthestRide}</span>
              </div>
              <div className="running-stats">
                <h3>Running Totals</h3>
                <span>Workouts: {totalRuns}</span>
                <span>Distance Traveled: {totalRunningDistance}</span>
                <span>Duration: {totalRunningDuration}</span>
                <span>Longest run:{longestRun}</span>
                <span>Farthest run:{farthestRun}</span>
              </div>
            </div>
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
