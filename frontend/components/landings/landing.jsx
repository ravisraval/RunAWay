import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeaderContainer from './landing_header_container';
import SignupFormContainer from '../signup_container';
import Modal from '../modal';


class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    // </div>
    return (
      <div className='landing-content-wrapper'>
        <div className='landing-content'>
        <div className="spacer">
        <button className="session-link-sign-up" onClick={() => this.openModal()}><h3>Sign Up</h3></button>

        <LandingHeaderContainer/>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <SignupFormContainer/>
        </Modal>
      </div>
      </div>
    </div>
    );
  }
};

export default Landing;
