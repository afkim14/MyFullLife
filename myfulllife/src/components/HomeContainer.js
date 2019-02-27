import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom'
import {
  Container,
  Image,
  Header,
  Button
} from 'semantic-ui-react'
import { Slide } from 'react-slideshow-image'
import {fontSizeMultiplier} from '../App.js'
import PointsContainer from './PointsContainer';

/*
const properties = {
  autoplay: false,
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
*/

const imagesInfo = [
  {src: './images/farmers-market.jpg', alt: "Image of a farmer's market"},
  {src: './images/temp.jpg', alt: "Mr. Microsoft Himself."}
];

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {currentImageIndex: 0};
	this.firstItemToRead = React.createRef();
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
	  var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
	  firstElement.focus();
  }

  componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
  }

  componentOpened = () => {
	  console.log("Wow, this actually works!");
  }

  render() {
    return (
      <div className="container-override">
    		<div style={{padding:25}}></div>
            <h1 tabIndex='0' ref={this.firstItemToRead} style={{textAlign:'center', fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Happy Wednesday, John!</h1>
			<div style={{textAlign: 'center'}}>
				<img style={profilePic} src='./images/profile-photo.png' />
			</div>
			<div style={{fontFamily: 'Comfortaa', fontSize: fontSizeMultiplier * 24, textAlign: 'center'}}> Select an option from the menu to get started. <br /> <br/> Here are some updates:</div>
			<div style={grid}>
				<div style={gridItem1}>
					<Image style={tipIconStyle} src='./icons/accomplishment.png' alt="Accomplishments Update" aria-hidden='true' />
					<div style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}> You gained 5 points for logging in today. You’ve earned 25 points this week, which is only 10 away from beating your record! </div>
				</div>
				<div style={gridItem2}>
					<Image style={tipIconStyle} src='./icons/community.png' alt="Community Update" aria-hidden='true' />
					<div style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}> There’s some great events happening at the C.I.F. this week. Check out the Community tab to learn more! </div>
				</div>
				<div style={gridItem3}>
					<Image style={tipIconStyle} src='./icons/goals.png' alt="Goals Update" aria-hidden='true'/>
					<div style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}> You are so close to finishing the goal “Healthy Eating”! Discover your progress over on the Goal tab.</div>
				</div>
				<div style={gridItem4}>
					<Image style={tipIconStyle} src='./icons/journal.png' alt="Journal Update" aria-hidden='true'/>
					<div style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}> Is there anything you are proud of or had fun doing this week? Write a journal entry to earn 5 points!</div>
				</div>
			</div>
      </div>
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

const gridItem1 = {
 padding: '20px',
 backgroundColor: '#F7B733',
 textAlign: 'center'
}

const gridItem2 = {
 padding: '20px',
 backgroundColor: '#4ABDAC',
 textAlign: 'center'
}

const gridItem3 = {
 padding: '20px',
 backgroundColor: 'rgb(203,102,120)',
 textAlign: 'center'
}

const gridItem4 = {
 padding: '20px',
 backgroundColor: 'rgb(201,148,234)',
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
	alignItems:'center',
    width:'100px',
    margin: '10px',
    border: '5px solid grey',
	background: 'white',
    borderRadius: '500px',
    WebkitBorderRadius: '500px',
    MozBorderRadius: '500px'
};
