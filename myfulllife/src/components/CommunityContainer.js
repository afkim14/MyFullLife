import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom'
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
  {src: './images/farmers-market.jpg', alt: "Image of the Evanston farmer's market. A variety of vendors and families are shown.",
   text: "Evanston hosted a Farmer's Market this Sunday. Thanks to John Doe for this awesome picture!"},
  {src: './images/social-justice.jpg', alt: "Flyer for The World Day of Social Justice, which is being held on February 20th, 2019.",
   text: "The World Day of Social Justice is February 20th. Learn more at our blog post on our website!"}
];

class CommunityContainer extends Component {
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

  render() {
    return (
      <div className="container-override">
    		<div style={{padding:25}}></div>
            <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Community</h1>
    		<div style={{padding:25}}></div>
        <div style={{height: 330}}>
          <img style={{width: 600}} src={imagesInfo[this.state.currentImageIndex].src} alt={imagesInfo[this.state.currentImageIndex].alt} />
        </div>
		<div style={{fontFamily:'Comfortaa', margin:'0', fontSize:'12pt'}}> {imagesInfo[this.state.currentImageIndex].text} </div>
		<div style={{margin:'0px auto',display:'inline-block'}}>
			<div style={{float:'left', textAlign:'center'}}>
				<button style={buttonStyle} onClick={this.nextImage}> Next Story (Press Right Arrow) </button>
			</div>
	  	</div>
		<div style={grid}>
			<div style={gridItem}>
				<div style={{fontSize: '16pt', color: "#3e3e3e"}}> Upcoming Events </div>
				<hr aria-hidden='true' />
				<div style={{fontSize: '12pt', color: "#3e3e3e"}}> HeARTwords Workshop - Saturday 2/23 from 3-5:30pm at The C.I.F. </div>
				<hr aria-hidden='true' />
				<div style={{fontSize: '12pt', color: "#3e3e3e"}}> Yoga - Monday 2/25 from 4-5pm at The Evanston Athletic Club </div>
				<hr aria-hidden='true' />
				<div style={{fontSize: '12pt', color: "#3e3e3e"}}> Book Club - Monday 2/25 from 5-6pm at The Evanston Public Library </div>
			</div>
			<div style={gridItem}>
				<div style={{fontSize: '16pt', color: "#3e3e3e"}}> Links </div>
				<hr aria-hidden='true' />
				<a style={{fontSize: '12pt'}} href='https://independentfutures.com'> Center For Independent Futures Website </a>
				<hr aria-hidden='true' />
				<a style={{fontSize: '12pt'}} href='https://independentfutures.com/events-activities/'> Full Events and Activities Calendar </a>
				<hr aria-hidden='true' />
				<a style={{fontSize: '12pt'}} href='https://independentfutures.com/category/blog/'> News </a>
			</div>
		</div>
      </div>
    );
  }
}

export default CommunityContainer

const grid = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridRowGap: '50px',
  gridColumnGap: '50px',
  padding: '25px',
};

const gridItem = {
 padding: '20px',
 backgroundColor: '#4ABDAC',
 textAlign: 'center'
};

const borderItem = {
	fontSize: '12px',
	border: '3px rounded black'
};

const buttonStyle = {
	width:'200px',
	height:'100px',
	margin:'15px'
};
