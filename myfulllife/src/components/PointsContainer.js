import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'

class PointsContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Header as='h3' style={{color: "#6b6b6b"}}>Group Total Points: 100/2000, Individual Points: 30</Header>
    );
  }
}

export default PointsContainer
