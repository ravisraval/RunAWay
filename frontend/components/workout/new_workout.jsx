import React from 'react';
import { withRouter } from 'react-router-dom';

class NewWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      route_id: null,
      date: null,
      start_time: null,
      title: '',
      notes: '',
      distance: '',
      elevation_change: '',
      seconds: '',
      minutes: '',
      hours: '',
      biked: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }
  componentDidMount() {
    this.props.fetchRoutes();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createWorkout(this.state)
      .then(data => this.props.history.push(`/home/workouts/${data.workout.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  handleRadio(event) {
   const biked = event.currentTarget.value === 'true' ? true: false;
   this.setState({ biked });
 }

  render() {
    const { biked } = this.state;
    const { routes } = this.props;
    // also this could be a scrolling modal IF TIME, MAKE SELECT ROUTE A SCROLLING MODAL
    return (
      <section className="new-workout-page">

        <ul>{this.errors()}</ul>
        <h1 className="page-header">Log a New Workout</h1>

        <form className="workout-form" onSubmit={this.handleSubmit}>

          <section className="form-section">
            <label className="boxed-inputs">

              <h3>Workout Title</h3>
              <div>
                <p><input
                  className="title-input"
                  type="text"
                  value={this.state.title}
                  placeholder="Morning Jog"
                  onChange={this.update('title')}
                /></p>
              </div>
            </label>
          </section>

          <section className="form-section">
            <label className="boxed-inputs">
              <h3>Distance</h3>
              <div>
              <p><input
                type="number"
                value={this.state.distance}
                placeholder="0"
                onChange={this.update('distance')}
              />mi</p>
            </div>
            </label>


            <label className="boxed-inputs">
              <h3>Duration</h3>

              <div>
                <p><input
                  type="text"
                  value={this.state.hours}
                  placeholder="00"
                  onChange={this.update('hours')}
                />h</p>

              <p><input
                  type="text"
                  value={this.state.minutes}
                  placeholder="00"
                  onChange={this.update('minutes')}
                />m</p>

              <p><input
                  type="number"
                  value={this.state.seconds}
                  placeholder="00"
                  onChange={this.update('seconds')}
                />s</p>
              </div>
            </label>


            <label className="boxed-inputs">
              <h3>Elevation change</h3>
              <div>
                <p><input
                  type="number"
                  value={this.state.elevation_change}
                  placeholder="0"
                  onChange={this.update('elevation_change')}
                />ft</p>
              </div>
            </label>

          </section>

          <section className="form-section">

            <div className="activity-type">
              <div className="label-no-worky"><h3>Activity Type</h3>

                <label>
                  <input
                    type="radio"
                    name="biked"
                    value="true"
                    checked={biked === true}
                    onChange={this.handleRadio}
                  />Bike
                </label>

                <label>

                  <input
                    type="radio"
                    name="biked"
                    value="false"
                    checked={biked === false}
                    onChange={this.handleRadio}
                  />Run

                </label>

              </div>
            </div>



            <label><h3>Add a Route</h3>

              <select className="workout-input"
                value={this.state.route_id}
                onChange={this.update('route_id')}>
                <option selected="selected" disabled="true" value="">Select Premade Route (optional)</option>
                {routes.map((route) => {
                  return <option value={route.id} key={route.id}>{route.name}</option>;
                  })}
              </select>

            </label>
          </section>

          <section className="form-section">

            <label><h3>Notes</h3>

              <input
                value={this.state.notes}
                placeholder="Notes"
                onChange={this.update('notes')}
              />

            </label>

            <button type="submit">Create Workout</button>
          </section>

        </form>

        </section>
    );
  }
}

export default withRouter(NewWorkout);
