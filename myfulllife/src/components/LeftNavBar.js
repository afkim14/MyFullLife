import React, { Component, Text } from 'react';
import { SideNav, Nav, NavIcon, Navbar } from 'react-sidenav';
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'

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
	  console.log(this.state.selectedPath);
  }

  componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <Container>
        <Header as='h2' style={{textAlign: 'center', fontFamily:'Comfortaa'}}>My Full Life Menu</Header>
        <SideNav theme={theme}
			      selectedPath={this.state.selectedPath}
            onItemSelection={this.onItemSelection}>
            <Nav id={'home'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Home (1)
            </Nav>
	  		<Nav id={'community'}>
              <NavIcon>
                <Image src='./icons/community.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Community (2)
            </Nav>
            <Nav id={'courses'}>
              <NavIcon>
                <Image src='./icons/courses.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Courses (3)
            </Nav>
            <Nav id={'goals'}>
              <NavIcon>
                <Image src='./icons/goals.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Goals (4)
            </Nav>
            <Nav id={'journal'}>
              <NavIcon>
                <Image src='./icons/journal.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Journal (5)
            </Nav>
            <Nav id={'contacts'}>
              <NavIcon>
                <Image src='./icons/contacts.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Contacts (6)
            </Nav>
            <Nav id={'profile'}>
              <NavIcon>
                <Image src='./icons/profile.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Profile (7)
            </Nav>
            <Nav id={'logout'}>
              <NavIcon>
                <Image src='./icons/logout.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Log Out (8)
            </Nav>
        </SideNav>
      </Container>
    );
  }
}

export default LeftNavBar
