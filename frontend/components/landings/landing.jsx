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
    return (
      <div>
        <LandingHeaderContainer/>
        <div className='landing-content'>
          <button onClick={() => this.openModal()}>Make your way</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <SignupFormContainer/>
          </Modal>
        </div>
      </div>
    );
  }
};

export default Landing;
