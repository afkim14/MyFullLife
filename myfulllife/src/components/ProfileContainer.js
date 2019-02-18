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
      <Container style={{textAlign: 'center'}}>
        <PointsContainer />
        <Header as='h2' style={{textAlign: 'center'}}>Profile</Header>
        <Image src='./icons/contacts.png' rounded centered size='tiny' />
        <Header as='h1' style={{textAlign: 'center'}}>John Doe</Header>
      </Container>
    );
  }
}

export default ProfileContainer
