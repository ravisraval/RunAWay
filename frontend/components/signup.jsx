import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user}).then(this.props.history.push('/api/workouts'));
  }


  render() {
    return (
    <div className="signup-page">
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to RunAWay!
          <br/>
          Sign Up
          <div className="signup-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="singup-input"
              />
            </label>
            <br/>
            <input type="submit" value="Create Account" />
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SignupForm);
