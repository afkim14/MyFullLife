import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header,
  Input,
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class JournalContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={{textAlign: 'center'}}>
        <PointsContainer />
        <Header as='h2' style={{textAlign: 'center'}}>Journal</Header>
        <Input placeholder='Title' />
      </Container>
    );
  }
}

export default JournalContainer
