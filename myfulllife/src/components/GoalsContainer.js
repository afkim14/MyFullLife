import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class GoalsContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={{textAlign: 'center'}}>
        <PointsContainer />
        <Header as='h2' style={{textAlign: 'center'}}>Goals</Header>
      </Container>
    );
  }
}

export default GoalsContainer
