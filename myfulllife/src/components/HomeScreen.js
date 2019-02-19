import React, { Component, Text } from 'react';
import styled from "styled-components";
import {
  Container,
  Image,
  Header
} from 'semantic-ui-react'

import LeftNavBar from './LeftNavBar';
import HomeContainer from './HomeContainer';
import CommunityContainer from './CommunityContainer';
import CoursesContainer from './CoursesContainer';
import GoalsContainer from './GoalsContainer';
import JournalContainer from './JournalContainer';
import ContactsContainer from './ContactsContainer';
import ProfileContainer from './ProfileContainer';

const Navigation = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  float: left;
`;

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {currentTab: "home"};
  }

  onNavBarClick = (arg) => {
      this.setState({currentTab: arg});
  }

  render() {
    return (
      <div>
	      <Navigation>
          <LeftNavBar onNavBarClick={this.onNavBarClick} />
        </Navigation>
        {(() => {
          switch(this.state.currentTab) {
            case 'home':
              return <HomeContainer />;
		  case 'community':
			  return <CommunityContainer />;
            case 'courses':
              return <CoursesContainer />;
            case 'goals':
              return <GoalsContainer />;
            case 'journal':
              return <JournalContainer />;
            case 'contacts':
              return <ContactsContainer />;
            case 'profile':
              return <ProfileContainer />;
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}

export default HomeScreen
