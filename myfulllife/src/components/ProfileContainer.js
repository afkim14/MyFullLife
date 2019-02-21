import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='container-override'>
		<div style={{padding: 25}} />
        <Header as='h2' style={{textAlign: 'center'}}>Profile</Header>
		<div style={{textAlign: 'center'}}>
			<img style={profilePic} src='./images/profile-photo.png' />
		</div>
        <Header as='h1' style={{textAlign: 'center'}}>John Doe</Header>
      </div>
    );
  }
}

const profilePic = {
	alignItems:'center',
    width:'200px',
    margin: '10px',
    border: '5px solid grey',
	background: 'white',
    borderRadius: '500px',
    WebkitBorderRadius: '500px',
    MozBorderRadius: '500px'
};


export default ProfileContainer
