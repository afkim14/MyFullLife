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
      <Container style={{textAlign: 'center', background: 'linear-gradient(rgb(139, 205, 237) 75%, white)', height:'100vh'}}>
    		<div style={{padding:25}}></div>
            <Header as='h1' style={{fontFamily:'Comfortaa', margin:'0', fontSize:'50pt'}}>Welcome Fernando!</Header>
    		<div style={{padding:25}}></div>
        <div style={{height: 330}}>
		  { /* <Button style={{float: "left", marginTop: 125}} onClick={this.prevImage}>Prev</Button> */ }
          <Image style={{width: 600, margin: "0 auto"}} src={imagesInfo[this.state.currentImageIndex].src} alt={imagesInfo[this.state.currentImageIndex].alt} />
		  { /* <Button style={{float: "right",  marginTop: 125}} onClick={this.nextImage}>Next</Button> */}
        </div>
		<div style={{fontFamily:'Comfortaa', margin:'0', fontSize:'12pt'}}> {this.state.currentImageIndex} </div>
    		<PointsContainer />
      </Container>
    );
  }
}

        //<Image src='./images/temp.jpg' />
export default HomeContainer
//rgb(139, 205, 237)
