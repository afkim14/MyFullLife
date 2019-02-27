import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Image,
  Header,
  Card,
  Icon
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      courseCategories: [
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
	this.firstItemToRead = React.createRef();
  }
	
	componentDidMount() {
	  //document.addEventListener('keydown', this.handleKeyPress);
	  var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
	  firstElement.focus();
  }

  render() {
    return (
      <div className='container-override'>
        <div style={{padding:25}} />
        <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Courses</h1>
        <Card.Group style={{marginLeft: 290}}>
        {
          this.state.courseCategories.map(c => {
            return <Card style={{backgroundColor: "#4ABDAC"}}>
                    <Image src={c.image} style={{margin: '0 auto', marginTop: '20px', marginBottom: '20px', backgroundColor: "#4ABDAC"}} size='tiny' />
                    <Card.Content>
                      <Card.Header><a style={{color: "#3e3e3e"}} href="">{c.name}</a></Card.Header>
                      <Card.Description style={{color: "#3e3e3e"}}>{c.meta}</Card.Description>
                    </Card.Content>
                  </Card>
          })
        }
        </Card.Group>
      </div>
    );
  }
}

export default CoursesContainer
