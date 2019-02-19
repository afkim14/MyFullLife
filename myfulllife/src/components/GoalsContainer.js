import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header,
  Card,
  Icon
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class GoalsContainer extends Component {
  constructor() {
    super();
    this.state = {
      goalCategories: [
        {name: "Professional", meta: "Learn more about jobs.", image: "./icons/suitcase.png"},
        {name: "Coursework", meta: "Learn more about courseworks.", image: "./icons/open-book.png"},
        {name: "Athletic", meta: "Learn more about exercise and sports.", image: "./icons/running.png"},
        {name: "Getting Around", meta: "Learn more about safety skills.", image: "./icons/getting-around.png"},
        {name: "Hopes and Dreams", meta: "Learn more about hopes and dreams.", image: "./icons/human.png"},
        {name: "Household", meta: "Learn more about household chores.", image: "./icons/bed.png"},
        {name: "Social", meta: "Learn more about social skills.", image: "./icons/users.png"},
        {name: "Fun and Talents", meta: "Learn more about entertainment and talents.", image: "./icons/confetti.png"},
        {name: "Wellness", meta: "Learn more about self-care and health.", image: "./icons/care.png"},
      ]
    };
  }

  render() {
    return (
      <Container style={{textAlign: 'center'}}>
        <PointsContainer />
        <Header as='h2' style={{textAlign: 'center'}}>Goals</Header>
        <Card.Group style={{marginLeft: 180}}>
        {
          this.state.goalCategories.map(c => {
            return <Card>
                    <Image src={c.image} style={{margin: '0 auto', marginTop: '20px', marginBottom: '20px', backgroundColor: "#fff"}} size='tiny' />
                    <Card.Content>
                      <Card.Header><a href="">{c.name}</a></Card.Header>
                      <Card.Description>{c.meta}</Card.Description>
                    </Card.Content>
                  </Card>
          })
        }
        </Card.Group>
      </Container>
    );
  }
}

export default GoalsContainer
