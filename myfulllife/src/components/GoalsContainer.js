import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom';
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
import {fontSizeMultiplier} from '../App.js';
import PointsContainer from './PointsContainer';

class GoalsContainer extends Component {
  constructor() {
    super();
    this.state = {
      newGoal: false,
      newCategory: false,
	  completedGoals:false,
      newCategoryText: "",
      newGoalText: "",

      goals: [
        {text: "Play basketball once a week.", progress: 'Played for 3 weeks in a row. Nice work!', category: "Athletic"},
        {text: "Attend more social hours.", progress:'Attended 1 social hour in the past 2 months.', category: "Social"},
        {text: "Do laundry.", progress:'Needs completion.',category: "Household"},
        {text: "Go to the doctor by Friday.", progress:'Needs completion.',category: "Wellness"}
      ],
      goalCategories: [
        {name: "Professional", button:'Q', meta: "Goals involving jobs.", image: "./icons/suitcase.png"},
        {name: "Coursework", button:'W', meta: "Goals involving coursework.", image: "./icons/open-book.png"},
        {name: "Athletic", button:'E', meta: "Goals involving exercise and sports.", image: "./icons/running.png"},
        {name: "Getting Around", button:'R', meta: "Goals involving safety skills.", image: "./icons/getting-around.png"},
        {name: "Hopes and Dreams", button:'T', meta: "Goals involving hopes and dreams.", image: "./icons/human.png"},
        {name: "Household", button:'Y', meta: "Goals involving household chores.", image: "./icons/bed.png"},
        {name: "Social", button:'U', meta: "Goals involving social skills.", image: "./icons/users.png"},
        {name: "Fun and Talents", button:'I', meta: "Goals involving entertainment and talents.", image: "./icons/confetti.png"},
        {name: "Wellness", button:'O', meta: "Goals involving self-care and health.", image: "./icons/care.png"},
      ],
      tips: [
        {text: "Login to My Full Life everyday."},
        {text: "Ask for assistance from a C.I.F. staff member."}
      ],
	  finishedGoals:[
		{text: "Go hiking with friends.", completedOn:"October 16th, 2018", category:"Athletic"},
		{text: "Apply to jobs in local area.", completedOn:"September 14th, 2018", category:"Professional"},
		{text: "See the allergist for a check-up.", completedOn:"September 2nd, 2018", category:"Wellness"},
	]
    };
	this.firstItemToRead = React.createRef();
  }

  updateGoalText = (evt) => {
    this.setState({newGoalText: evt.target.value});
  }

  submitGoal = () => {
    var newGoals = this.state.goals;
    if (this.state.newGoalText != "") {
      newGoals.push({text: this.state.newGoalText, progress:"Needs completion.", category: this.state.newCategoryText});
    }
    this.setState({newGoal: false});
  }

  selectCategory = (category) => {
    this.setState({newGoal: true, newCategory: false, newCategoryText: category});
  }
  
  handleKeyPress = (event) => {
  	  switch (event.keyCode)
	  {
		  case 81:
			  if (this.state.newGoal)
				  this.submitGoal();
			  else if (this.state.newCategory)
				  this.selectCategory('Professional');
			  else
				  this.setState({newCategory: true});
			  break;
		  case 87:
			  if (this.state.newCategory)
				  this.selectCategory('Coursework');
			  else
				  this.setState({completedGoals: true});
			  break;
		  case 82:
			  if (this.state.newCategory)
				  this.selectCategory('Getting Around');
		  case 84:
			  if (this.state.newCategory)
				  this.selectCategory('Hopes and Dreams');
		  case 89:
			  if (this.state.newCategory)
				  this.selectCategory('Household');
		  case 85:
			  if (this.state.newCategory)
				  this.selectCategory('Social');
		  case 73:
			  if (this.state.newCategory)
				  this.selectCategory('Fun and Talents');
		  case 79:
			  if (this.state.newCategory)
				  this.selectCategory('Wellness');
		  case 69:
			  if (this.state.newCategory)
				  this.selectCategory('Athletic');
			  break;
		  case 27:
			  if (this.state.newGoal)
				  this.setState({newGoal: false});
			  else if (this.state.completedGoals)
				  this.setState({completedGoals: false});
			  break;
	  }
  }

  
  componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
	  var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
	  firstElement.focus();
  }

  render() {
    if (this.state.newGoal) {
      return (
        <Container style={{textAlign: 'center'}}>
          <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Goals</h1>
          <Input onChange={this.updateGoalText} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Goal Description' />
          <Button style={{marginTop: 30, backgroundColor: "#F7B733", color: 'white'}} size="large" icon labelPosition='left' onClick={() => this.submitGoal()}>
            <Icon name='upload' />
            Submit (Press Q)
          </Button>
	  <div style={{fontSize: '24pt'}}>Category: {this.state.newCategoryText}</div>
		<Button style={{marginTop: 30, backgroundColor: "#F7B733", color: 'white'}} size="large" onClick={() =>  this.setState({newGoal: false})}>
            Cancel (Press Escape)
          </Button>
        </Container>
      );
    } else if (this.state.newCategory) {
      return (
        <Container style={{textAlign: 'center'}}>
          <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Goals</h1>
          <Header as='h3' style={{color: "black", fontFamily:"Comfortaa", marginTop: 10}}>Please select a category that best describes your goal.</Header>
          <Card.Group style={{marginLeft: 100}}>
          {
            this.state.goalCategories.map(c => {
              return <Card style={{backgroundColor: "#a8c9ff"}}>
                      <Image src={c.image} aria-hidden='true' style={{margin: '0 auto', marginTop: '20px', marginBottom: '20px', backgroundColor: "#a8c9ff"}} size='tiny' />
                      <Card.Content>
                        <Card.Header><Button style={{backgroundColor: "#4ABDAC", color: 'white',fontSize:fontSizeMultiplier*12}} onClick={() => this.selectCategory(c.name)}>{c.name} (Press {c.button})</Button></Card.Header>
                        <Card.Description style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{c.meta}</Card.Description>
                      </Card.Content>
                    </Card>
            })
          }
          </Card.Group>
        </Container>
      );
    } else if (this.state.completedGoals){
		return(
		 <div className='container-override'>
          <div style={{padding:25}} />
          <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Goals</h1>
          <Button size='huge' style={{backgroundColor: "#F7B733", color: 'white'}} onClick={() => this.setState({completedGoals: false})}>
            Back to Goals (Press Escape)
          </Button>
          <Card style={{width: "60%", margin: "0 auto", marginTop: 20, backgroundColor: "#a8c9ff"}}>
            <Card.Content>
              <Card.Header style={{color: "#3e3e3e"}}>Completed Goals</Card.Header>
            </Card.Content>
            <Card.Content>
            <Table basic='very' celled collapsing style={{margin: "0 auto", width: "100%"}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{color: "#3e3e3e"}}>Goal</Table.HeaderCell>
				  <Table.HeaderCell style={{color: "#3e3e3e"}}> Date Completed </Table.HeaderCell>
                  <Table.HeaderCell style={{color: "#3e3e3e"}}>Category</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.finishedGoals.map(g => {
                    return <Table.Row>
                              <Table.Cell>
                                <Header as='h4' image>
                                  <Header.Content>
									<div style={{float:'left', display:'inline-block'}}>
										<div style={{fontSize:fontSizeMultiplier*16}}>{g.text}</div>
									</div>
                                  </Header.Content>
                                </Header>
                              </Table.Cell>
							  <Table.Cell style={{color: "#3e3e3e", fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{g.completedOn}</Table.Cell>
                              <Table.Cell style={{color: "#3e3e3e", fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{g.category}</Table.Cell>
                            </Table.Row>
                })}
              </Table.Body>
            </Table>
            </Card.Content>
          </Card>
		</div>
		);
	} else {
      return (
        <div className='container-override'>
          <div style={{padding:25}} />
          <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Goals</h1>
          <Button size='huge' style={{backgroundColor: "#F7B733", color: 'white'}} icon labelPosition='left' onClick={() => this.setState({newCategory: true})}>
            <Icon aria-hidden='true' name='file alternate' />
            New Goal (Press Q)
          </Button>
          <Card style={{width: "60%", margin: "0 auto", marginTop: 20, backgroundColor: "#a8c9ff"}}>
            <Card.Content>
              <Card.Header style={{color: "#3e3e3e"}}>Current Goals</Card.Header>
            </Card.Content>
            <Card.Content>
            <Table basic='very' celled collapsing style={{margin: "0 auto", width: "100%"}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{color: "#3e3e3e"}}>Goals</Table.HeaderCell>
				  <Table.HeaderCell style={{color: "#3e3e3e"}}> Progress </Table.HeaderCell>
                  <Table.HeaderCell style={{color: "#3e3e3e"}}>Category</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.goals.map(g => {
                    return <Table.Row>
                              <Table.Cell style={{fontSize:fontSizeMultiplier*16}}>
                                <Header as='h4' image>
                                  <Header.Content>
									<div style={{float:'left', display:'inline-block'}}>
										<div style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{g.text}</div>
									</div>
                                  </Header.Content>
                                </Header>
                              </Table.Cell>
							  <Table.Cell style={{color: "#3e3e3e", fontSize:fontSizeMultiplier*16}}>{g.progress}</Table.Cell>
                              <Table.Cell style={{color: "#3e3e3e", fontSize:fontSizeMultiplier*16}}>{g.category}</Table.Cell>
                            </Table.Row>
                })}
              </Table.Body>
            </Table>
            </Card.Content>
          </Card>
          <div style={{width: 1000, margin: "0 auto", marginLeft: 220, display:'inline-block'}}>
            <Card style={{width: "40%", margin: "0 auto", marginTop: 20, float: 'left', margin: 10, backgroundColor: "#a8c9ff"}}>
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
                                      <div style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*12}}>{t.text}</div>
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                              </Table.Row>
                  })}
                </Table.Body>
              </Table>
              </Card.Content>
            </Card>
            <Card style={{width: "40%", margin: "0 auto", marginTop: 20, float: 'left', margin: 10, backgroundColor: "#a8c9ff"}}>
              <Card.Content>
                <Card.Header>Completed Goals</Card.Header>
              </Card.Content>
              <Card.Content>
                <Button size='huge' style={{backgroundColor: "#F7B733", color: 'white'}} onClick={() => this.setState({completedGoals: true})}>Click to View (or Press W)</Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      );
    }
  }
}

export default GoalsContainer
