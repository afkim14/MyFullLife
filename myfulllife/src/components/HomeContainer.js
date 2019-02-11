import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={{textAlign: 'center', backgroundColor: 'rgb(139, 205, 237)', height: '100%'}}>
        <PointsContainer />
        <Header as='h2'>Welcome Fernando!</Header>
        <Image src='./images/temp.jpg' />
      </Container>
    );
  }
}

export default HomeContainer
