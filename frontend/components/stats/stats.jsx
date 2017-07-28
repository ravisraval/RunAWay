import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Chart } from 'react-google-charts';


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
      totalDuration += workout.duration_seconds;
      totalDistance += parseFloat(workout.distance);
      if (workout.biked) {
        totalRides += 1;
        totalCyclingDuration += workout.duration_seconds;
        totalCyclingDistance += parseFloat(workout.distance);
        if (workout.duration_seconds > longestRide) {
          longestRide = workout.duration_seconds;
        }
        if (parseFloat(workout.distance) > farthestRide) {
          farthestRide = parseFloat(workout.distance);
        }
      } else {
        totalRuns += 1;
        totalRunningDuration += workout.duration_seconds;
        totalRunningDistance += parseFloat(workout.distance);
        if (workout.duration_seconds > longestRun) {
          longestRun = workout.duration_seconds;
        }
        if (parseFloat(workout.distance) > farthestRun) {
          farthestRun = parseFloat(workout.distance);
        }
      }
    });

    const totalDisData = [
      ['', 'Running', 'Cycling'],
      ['', totalRunningDistance, totalCyclingDistance]];

    const totalDurData = [
      ['', 'Running', 'Cycling'],
      ['', totalRunningDuration/3600, totalCyclingDuration/3600]];

    const totalWorkoutsData = [
      ['', 'Running', 'Cycling'],
      ['', totalRuns, totalRides]];

    const longestWorkoutData = [
      ['', 'Running', 'Cycling'],
      ['', longestRun/60, longestRide/60]];

    const farthestWorkoutData = [
      ['', 'Running', 'Cycling'],
      ['', farthestRun, farthestRide]];

    const averageSpeedData = [
      ['', 'Running', 'Cycling'],
      ['',
        totalRunningDistance/(totalRunningDuration/3600),
       totalCyclingDistance/(totalCyclingDuration/3600)]];

    return(
      <div className="stats-page" className="full-page-component">
        <h1 className="page-header">Statistics for {this.props.username}</h1>
        <div className='stats-charts-container'>

          <Chart className="chart"
            chartType="BarChart"
            data={totalWorkoutsData}
            options={{
              title: 'Workout Distribution',
              animation: { "startup": true, easing:'inAndOut', duration: 3},
              titleTextStyle: { color: "#686868", fontSize: 18}
            }}
            graph_id="TotalWorkouts"
            width="100vh"
            height="230px"
            legend_toggle
            />

          <Chart className="chart"
            chartType="BarChart"
            data={totalDisData}
            options={{
              title: 'Total Distance (miles)',
              subtitle: 'Miles',
              animation: { "startup": false, easing:'inAndOut', duration: 6},
              titleTextStyle: { color: "#686868", fontSize: 18}
            }}
            graph_id="TotalDistanceChart"
            width="100vh"
            height="230px"
            legend_toggle
          />

        <Chart className="chart"
            chartType="BarChart"
            data={totalDurData}
            options={{
              title: 'Total Duration (hours)',
              animation: { "startup": true, easing:'inAndOut', duration: 3},
              titleTextStyle: { color: "#686868", fontSize: 18}
            }}
            graph_id="DurationChart"
            width="100vh"
            height="230px"
            legend_toggle
          />

        <Chart className="chart"
            chartType="BarChart"
            data={longestWorkoutData}
            options={{title: 'Longest Workout (minutes)',
              animation: { "startup": true, easing:'inAndOut', duration: 6},
              titleTextStyle: { color: "#686868", fontSize: 18}
            }}
            graph_id="LongestWorkouts"
            height="230px"
            width="100vh"
            legend_toggle
          />

        <Chart className="chart"
            chartType="BarChart"
            data={farthestWorkoutData}
            options={{title: 'Farthest Workout (miles)',
              animation: { "startup": true, easing:'inAndOut', duration: 3},
              titleTextStyle: { color: "#686868", fontSize: 18}
            }}
            graph_id="FarthestWorkouts"
            width="100vh"
            height="230px"
            legend_toggle
          />

        <Chart className="chart"
            chartType="BarChart"
            data={averageSpeedData}
            options={{title: 'Average Speed (mph)',
              animation: { "startup": true, easing:'inAndOut', duration: 3},
              titleTextStyle: { color: "#686868", fontSize: 18}
            }}
            graph_id="AverageSpeed"
            width="100vh"
            height="230px"
            legend_toggle
          />

        </div>
      </div>
    );
  }
}

export default Stats;
