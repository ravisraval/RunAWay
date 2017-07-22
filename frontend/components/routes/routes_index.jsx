import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);

  }
  //
  // componentDidMount() {
  //   this.props.fetchWorkouts();
  // }

  render() {
    // const {workouts} = this.props;
    // if (!workouts) {return null};
    // const workoutItems = this.props.workouts.map(workout => (
    //     <WorkoutFeedItemContainer
    //       key={ workout.id }
    //       workout={ workout }/>
    //   )
    // );
    return (
      <div className="routes-index-page">
        <h1>dem routes</h1>
        <ul className="routes-list">
        </ul>

        <Link to='/home/new_route'><button className="new-route-btn">New Route</button></Link>
      </div>
    );
  }
}

export default withRouter(RoutesIndex);
