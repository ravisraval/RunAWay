import React from 'react';
import { Link, withRouter } from 'react-router-dom';




class LandingHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    // this.redirectIfLoggedIn.bind(this)();
  }


  // redirectIfLoggedIn(){
  //   if(this.props.loggedIn){
  //     this.props.history.push('/home/workouts')
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({username:"Demo User", password:"guacamole"})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {this.props.history.push('/home/workouts')};
  }

  // renderErrors(){
  //   return(
  //     <ul>
  //       {this.props.errors.map( (error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {

    return (
      <div className="landing-header">
        <ul className="landing-header-list">
          <li className="title">
            <h3>RunAWay</h3>
          </li>
          <li>
            <ul className="login-form-list">
            <form onSubmit={this.handleSubmit} className="login-form">
                <li>

                <input type="text" placeholder="Username"
                   value={this.state.username}
                   onChange={this.update('username')}
                   className="login-input"/>
                 </li>
                 <li>
                 <input type="password" placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </li>
                <li className="last-list-item">
                <button className="session-link" type="submit">Log In</button>
                </li>
            </form>
            </ul>
          </li>
          <li className="demo-login"><button
            className="session-link" onClick={this.handleDemoLogin}>Demo Login</button></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(LandingHeader);
