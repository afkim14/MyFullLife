import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header,
  Button
} from 'semantic-ui-react'
import { Slide } from 'react-slideshow-image'
import PointsContainer from './PointsContainer';

const properties = {
  autoplay: false,
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const imagesInfo = [
  {src: './images/farmers-market.jpg', alt: "Image of a farmer's market"},
  {src: './images/temp.jpg', alt: "Mr. Microsoft Himself."}
];

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {currentImageIndex: 0};
  }
	
  handleKeyPress = (event) => {
  	  switch (event.keyCode)
	  {
		  case 37:
			  this.prevImage();
			  break;
		  case 39:
			  this.nextImage();
			  break;
	  }
  }

  prevImage = () => {
    var newIdx = this.state.currentImageIndex-1;
    if (newIdx < 0) { newIdx = imagesInfo.length-1 }
    this.setState({currentImageIndex: newIdx});
  }

  nextImage = () => {
    this.setState({currentImageIndex: (this.state.currentImageIndex+1) % imagesInfo.length});
  }
    
    componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <Container style={{background: 'linear-gradient(rgb(139, 205, 237) 75%, white)', height:'100vh'}}>
    		<div style={{padding:25}}></div>
            <Header as='h1' style={{textAlign:'center', fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Happy Wednesday, Sammy!</Header>
			<div style={{padding:10}}></div>
			<div style={{textAlign: 'center'}}>
				<Image style={profilePic} src='./images/profile-photo.png' />
			</div>
			<div style={{fontFamily: 'Comfortaa', fontSize: "24pt", textAlign: 'center'}}> Select an option from the menu to get started. </div>
			<div style={grid}>
				<div style={gridItem}>
					<Image style={tipIconStyle} src='./icons/accomplishment.png' alt="Accomplishments Update" />
					<div style={tipElement}> You gained 5 points for logging in today. You’ve earned 25 points this week, which is only 10 away from beating your record! </div>
				</div>
				<div style={gridItem}>
					<Image style={tipIconStyle} src='./icons/community.png' alt="Community Update" />
					<div style={tipElement}> There’s some great events happening at the C.I.F. this week. </div>
				</div>
				<div style={gridItem}>
					<Image style={tipIconStyle} src='./icons/goals.png' alt="Goals Update"/>
					<div style={tipElement}> You are so close to finishing the goal “Healthy Eating”!  </div>
				</div>
				<div style={gridItem}>
					<Image style={tipIconStyle} src='./icons/journal.png' alt="Journal Update"/>
					<div style={tipElement}> Is there anything you are proud of or had fun doing this week? Write a journal entry to earn 5 points!</div>
				</div>
			</div>
      </Container>
    );
  }
}

        //<Image src='./images/temp.jpg' />
export default HomeContainer
//rgb(139, 205, 237)

const grid = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridRowGap: '50px',
  gridColumnGap: '50px',
  padding: '50px'
}

const gridItem = {
 padding: '20px',
 backgroundColor: 'white',
 textAlign: 'center'
}

const tipElement = {
	fontFamily: 'Comfortaa'
}

const tipIconStyle = {
	marginTop: '10px',
	marginBottom:'10px',
	display: 'inline-block',
	width: '50px',
	height: '50px'
};

const profilePic = {
	textAlign:'center',
    width:'100px',
    margin: '10px',
    border: '5px solid grey',
	background: 'white',
    borderRadius: '500px',
    WebkitBorderRadius: '500px',
    MozBorderRadius: '500px'
};
