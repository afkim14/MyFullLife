import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header,
  Card,
  Icon,
  Input,
  Table,
  Button
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class GoalsContainer extends Component {
  constructor() {
    super();
    this.state = {
      newGoal: false,
      newCategory: false,
      newCategoryText: "",
      newGoalText: "",

      goals: [
        {text: "Play basketball once a week.", category: "Athletic"},
        {text: "Attend more social hours.", category: "Social"},
        {text: "Do laundry.", category: "Household"},
        {text: "Go to the doctor by Friday.", category: "Wellness"}
      ],
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
      ],
      tips: [
        {text: "Login to My Full Life everyday."},
        {text: "Ask for assistance from a CIF staff member."}
      ]
    };
  }

  updateGoalText = (evt) => {
    this.setState({newGoalText: evt.target.value});
  }

  submitGoal = () => {
    var newGoals = this.state.goals;
    if (this.state.newGoalText != "") {
      newGoals.push({text: this.state.newGoalText, category: this.state.newCategoryText});
    }
    this.setState({newGoal: false});
  }

  selectCategory = (category) => {
    this.setState({newGoal: true, newCategory: false, newCategoryText: category});
  }

  render() {
    if (this.state.newGoal) {
      return (
        <Container style={{textAlign: 'center'}}>
          <Header as='h2' style={{textAlign: 'center'}}>Goals</Header>
          <Input onChange={this.updateGoalText} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Goal Description' />
          <Button style={{marginTop: 30}} size="large" icon labelPosition='left' onClick={() => this.submitGoal()}>
            <Icon name='upload' />
            Submit
          </Button>
        </Container>
      );
    } else if (this.state.newCategory) {
      return (
        <Container style={{textAlign: 'center'}}>
          <PointsContainer />
          <Header as='h2' style={{textAlign: 'center'}}>Goals</Header>
          <Header as='h3' style={{color: "black", fontFamily:"Comfortaa", marginTop: 10}}>Select the category.</Header>
          <Card.Group style={{marginLeft: 180}}>
          {
            this.state.goalCategories.map(c => {
              return <Card>
                      <Image src={c.image} aria-hidden='true' style={{margin: '0 auto', marginTop: '20px', marginBottom: '20px', backgroundColor: "#fff"}} size='tiny' />
                      <Card.Content>
                        <Card.Header><Button onClick={() => this.selectCategory(c.name)}>{c.name}</Button></Card.Header>
                        <Card.Description>{c.meta}</Card.Description>
                      </Card.Content>
                    </Card>
            })
          }
          </Card.Group>
        </Container>
      );
    } else {
      return (
        <Container style={{textAlign: 'center'}}>
          <PointsContainer />
          <Header as='h2' style={{textAlign: 'center'}}>Goals</Header>
          <Button icon labelPosition='left' onClick={() => this.setState({newCategory: true})}>
            <Icon name='file alternate' />
            New Goal
          </Button>
          <Card style={{width: "80%", margin: "0 auto", marginTop: 20}}>
            <Card.Content>
              <Card.Header>Current Goals</Card.Header>
            </Card.Content>
            <Card.Content>
            <Table basic='very' celled collapsing style={{margin: "0 auto"}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Goals</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.goals.map(g => {
                    return <Table.Row>
                              <Table.Cell>
                                <Header as='h4' image>
                                  <Header.Content>
                                    <a href="">{g.text}</a>
                                  </Header.Content>
                                </Header>
                              </Table.Cell>
                              <Table.Cell>{g.category}</Table.Cell>
                            </Table.Row>
                })}
              </Table.Body>
            </Table>
            </Card.Content>
          </Card>
          <div style={{width: 1000, margin: "0 auto", marginLeft: 220}}>
            <Card style={{width: "40%", margin: "0 auto", marginTop: 20, float: 'left', margin: 10}}>
              <Card.Content>
                <Card.Header>Tips for Accomplishment</Card.Header>
              </Card.Content>
              <Card.Content>
              <Table basic='very' celled collapsing style={{margin: "0 auto"}}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Tips</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.tips.map(t => {
                      return <Table.Row>
                                <Table.Cell>
                                  <Header as='h4' image>
                                    <Header.Content>
                                      <a href="">{t.text}</a>
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                              </Table.Row>
                  })}
                </Table.Body>
              </Table>
              </Card.Content>
            </Card>
            <Card style={{width: "40%", margin: "0 auto", marginTop: 20, float: 'left', margin: 10}}>
              <Card.Content>
                <Card.Header>Completed Goals</Card.Header>
              </Card.Content>
              <Card.Content>
                <Button>Click to view</Button>
              </Card.Content>
            </Card>
          </div>
        </Container>
      );
    }
  }
}

export default GoalsContainer
