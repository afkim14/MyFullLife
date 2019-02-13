import React, { Component, Text } from 'react';
import {
  Container,
  Image,
  Header
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

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={{textAlign: 'center', background: 'linear-gradient(rgb(139, 205, 237) 75%, white)', height:'100vh'}}>
		<div style={{padding:25}}></div>
        <Header as='h1' style={{fontFamily:'Comfortaa', margin:'0', fontSize:'75pt'}}>Welcome Fernando!</Header>
		<div style={{padding:25}}></div>
		<Slide {...properties}>
		<div className="each-slide">
			<Image src='./images/farmers-market.jpg' alt="Image of a farmer's market." />
        </div>
        <div className="each-slide">
			<Image src='./images/temp.jpg' alt="Mr. Microsoft Himself." />
        </div>
		</Slide>
		<PointsContainer />
      </Container>
    );
  }
}

        //<Image src='./images/temp.jpg' />
export default HomeContainer
//rgb(139, 205, 237)