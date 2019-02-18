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
      <Header as='h3' style={{color: "black", fontFamily:"Comfortaa", marginTop: 10}}>You earned 30 accomplishment points this week. As a group, you have accumulated 1000 points.</Header>
    );
  }
}

export default PointsContainer
