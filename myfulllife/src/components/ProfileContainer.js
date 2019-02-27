import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'

import {fontSizeMultiplier, updateFontSizeMultiplier} from '../App.js'

class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {test : 1};
    this.firstItemToRead = React.createRef();
  }
	
	sliderChange = (evt) => {
	updateFontSizeMultiplier(evt.target.value);
	this.setState({test: evt.target.value});
}
	buttonClicked = (evt) => {
		updateFontSizeMultiplier(evt.target.value);
		this.setState({test: evt.target})
	}
	
	changeFontSize = (size) => {
		updateFontSizeMultiplier(size);
		this.setState({test: size});
	}
	
	handleKeyPress = (event) => {
  	  switch (event.keyCode)
	  {
		  case 81:
			  this.changeFontSize(1);
			  break;
		  case 87:
			  this.changeFontSize(1.5);
			  break;
		  case 69:
			  this.changeFontSize(2);
			  break;
	  }
  }
	
  componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
	  var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
	  firstElement.focus();
  }

  componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className='container-override'>
		<div style={{padding: 25}} />
        <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize: fontSizeMultiplier*36}}>Profile</h1>
		<div style={{textAlign: 'center'}}>
			<img style={profilePic} src='./images/profile-photo.png' />
		</div>
        <Header as='h2' style={{textAlign: 'center', fontSize: fontSizeMultiplier * 36}}>John Doe</Header>
		<div style={{padding: 10}} />
		<div style={{backgroundColor:'lightGrey'}}>
			<div style={{padding: 15}} />
			<Image style={{margin: "0 auto", width:20}} src='./icons/accomplishment.png' alt="Accomplishment Points" aria-hidden='true' />
			<div style={{padding: 10}} />
			<div style={{fontFamily:'Comfortaa', fontSize: fontSizeMultiplier * 24}}>You have 30 personal points, the C.I.F. has 145 points!</div>
			<div style={{padding: 15}} />
		</div>
		<div style={{padding: 15}} />
		<div style={{fontFamily:'Comfortaa', fontSize: 24}}> Adjust Font Size </div>
		<div style={{padding: 5}} />
		<div style={{margin:'0px auto',display:'inline-block'}}>
			<div style={{float:'left', textAlign:'center'}}>
				<button style={buttonStyle} value='1' onClick={this.buttonClicked}> Medium Font Size (Press Q) </button>
				<button style={buttonStyle} value='1.5' onClick={this.buttonClicked}> Larger Font Size (Press W) </button>
				<button style={buttonStyle} value='2' onClick={this.buttonClicked}> Largest Font Size (Press E) </button>
			</div>
	  	</div>
      </div>
    );
  }
}


const profilePic = {
	alignItems:'center',
    width:'200px',
    margin: '10px',
    border: '5px solid grey',
	background: 'white',
    borderRadius: '500px',
    WebkitBorderRadius: '500px',
    MozBorderRadius: '500px'
};

const buttonStyle = {
	width:'200px',
	height:'100px',
	margin:'15px'
};


export default ProfileContainer
