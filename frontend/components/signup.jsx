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

  componntDidUpdate(){
    this.redirectifLoggedIn();
  }

  redirectifLoggedIn(){
    if(this.props.loggedIn){
      this.props.history.push('/')
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {this.props.history.push('/home/workouts')};
  }

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render() {
    return (
    <div className="signup-form-container">
      <form onSubmit={this.handleSubmit} className="signup-form-box">
        <label className="login-errors">{ this.renderErrors() }</label>
        <h1>Welcome to RunAWay!</h1>
        <h2>Sign Up</h2>
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
    );
  }
}

export default withRouter(SignupForm);
