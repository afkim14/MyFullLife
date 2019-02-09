import React, { Component, Text } from 'react';
import { SideNav, Nav, NavIcon } from 'react-sidenav';
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

  render() {
    return (
      <Container>
        <Header as='h2' style={{textAlign: 'center'}}>My Tab</Header>
        <SideNav theme={theme} defaultSelectedPath={"home"}
            onItemSelection={this.onItemSelection}>
            <Nav id={'home'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Home
            </Nav>
            <Nav id={'courses'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Courses
            </Nav>
            <Nav id={'goals'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Goals
            </Nav>
            <Nav id={'journal'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Journal
            </Nav>
            <Nav id={'contacts'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Contacts
            </Nav>
            <Nav id={'profile'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Profile
            </Nav>
            <Nav id={'logout'}>
              <NavIcon>
                <Image src='./icons/home.png' style={{width: 20, marginRight: 10}} />
              </NavIcon>
              Log Out
            </Nav>
        </SideNav>
      </Container>
    );
  }
}

export default LeftNavBar
