import React, { Component, Text } from 'react';
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
  }
	
	sliderChange = (evt) => {
	updateFontSizeMultiplier(evt.target.value);
	this.setState({test: evt.target.value});
}

  render() {
    return (
      <div className='container-override'>
		<div style={{padding: 25}} />
        <Header as='h1' style={{textAlign: 'center', fontSize: fontSizeMultiplier * 48}}>Profile</Header>
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
		<div style={{fontFamily:'Comfortaa', fontSize: 24}}> Font Size </div>
		<div style={{padding: 5}} />
		<div class="slidecontainer">
  			<input type="range" min="1" max="2" step="0.05" id="fontSlider" onChange={this.sliderChange} />
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


export default ProfileContainer
