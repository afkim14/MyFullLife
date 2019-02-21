import React, { Component, Text } from 'react';
import { SideNav, Nav, NavIcon, Navbar } from 'react-sidenav';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'

import { canUseNumberKeys, enableNumberKeys, disableNumberKeys } from '../App.js';

const theme = {
  hoverBgColor: "#f5f5f5",
  selectionBgColor: "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

class LeftNavBar extends Component {
  constructor() {
    super();
    this.state = {selectedPath: "home"};
  }

  onItemSelection = (arg) => {
    this.setState({ selectedPath: arg.id });
    this.props.onNavBarClick(arg.id);
  }

  handleKeyPress = (event) => {
	  if (canUseNumberKeys === false)
		  return;
	  var chosenPage = this.state.selectedPath;
	  switch (event.keyCode)
	  {
		  case 49:
			  chosenPage='home';
			  break;
		  case 50:
			  chosenPage='community';
			  break;
		  case 51:
			  chosenPage='courses';
			  break;
		  case 52:
			  chosenPage='goals';
			  break;
		  case 53:
			  chosenPage='journal';
			  break;
		  case 54:
			  chosenPage='contacts';
			  break;
		  case 55:
			  chosenPage='profile';
			  break;
		  case 56:
			  chosenPage='logout';
			  break;
	  }
	  this.props.onNavBarClick(chosenPage);
	  this.setState({ selectedPath: chosenPage });
  }

  componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <Container style={{background: 'radial-gradient(circle, rgba(161,161,161,1) 0%, rgba(212,212,212,1) 100%)', height:'100vh'}}>
        <h2 style={{textAlign: 'center', fontFamily:'Comfortaa', padding: '10px'}}>My Full Life Menu</h2>
		<hr aria-hidden='true' />
        <SideNav theme={theme}
			      selectedPath={this.state.selectedPath}
            onItemSelection={this.onItemSelection}>
            <Nav id={'home'}>
              <NavIcon>
                <Image src='./icons/home.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Home (1)
            </Nav>
	  		<Nav id={'community'}>
              <NavIcon>
                <Image src='./icons/community.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Community (2)
            </Nav>
            <Nav id={'courses'}>
              <NavIcon>
                <Image src='./icons/courses.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Courses (3)
            </Nav>
            <Nav id={'goals'}>
              <NavIcon>
                <Image src='./icons/goals.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Goals (4)
            </Nav>
            <Nav id={'journal'}>
              <NavIcon>
                <Image src='./icons/journal.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Journal (5)
            </Nav>
            <Nav id={'contacts'}>
              <NavIcon>
                <Image src='./icons/contacts.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Contacts (6)
            </Nav>
            <Nav id={'profile'}>
              <NavIcon>
                <Image src='./icons/profile.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Profile (7)
            </Nav>
            <Nav id={'logout'}>
              <NavIcon>
                <Image src='./icons/logout.png' aria-hidden='true' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Log Out (8)
            </Nav>
		<div style={{padding: '5px'}} />
		<hr aria-hidden='true' />
		<div style={{padding: '5px'}} />
		<div style={{textAlign: 'center'}}>
			<img style={profilePic} src='./images/profile-photo.png' aria-hidden='true' />
		</div>
		<div style={{padding: '5px'}} />
		<div style={{textAlign:'center', fontSize: '16pt'}} aria-hidden='true'> 30 Points </div>
		<div style={{padding: '5px'}} />
		<div style={{textAlign: 'center'}}>
			<img style={{width:'100px', height: '100px'}} src='./images/cif-logo.jpg' aria-hidden='true' />
		</div>
        </SideNav>
      </Container>
    );
  }
}

export default LeftNavBar

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
