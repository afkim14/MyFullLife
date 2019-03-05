import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Image,
  Header,
  Card,
  Icon,
  Button
} from 'semantic-ui-react'
import {fontSizeMultiplier} from '../App.js';
import PointsContainer from './PointsContainer';

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedCourseCategory: false,
      newCategoryText: "",
      courseCategories: [
        {name: "Professional", button:'Q', meta: "Learn more about jobs.", image: "./icons/suitcase.png"},
        {name: "Coursework", button:'W', meta: "Learn more about courseworks.", image: "./icons/open-book.png"},
        {name: "Athletic", button:'E', meta: "Learn more about exercise and sports.", image: "./icons/running.png"},
        {name: "Getting Around", button:'R', meta: "Learn more about safety skills.", image: "./icons/getting-around.png"},
        {name: "Hopes and Dreams", button:'T', meta: "Learn more about hopes and dreams.", image: "./icons/human.png"},
        {name: "Household", button:'Y', meta: "Learn more about household chores.", image: "./icons/bed.png"},
        {name: "Social", button:'U', meta: "Learn more about social skills.", image: "./icons/users.png"},
        {name: "Fun and Talents", button:'I', meta: "Learn more about entertainment and talents.", image: "./icons/confetti.png"},
        {name: "Wellness", button:'O', meta: "Learn more about self-care and health.", image: "./icons/care.png"},
      ],
      coursePDFs: [
        {
          category: "Professional",
          links: [
            {title: "Resume PDF", url: "./pdfs/Professional/ProfessionalResume.pdf"},
            {title: "Scheduling PDF", url: "./pdfs/Professional/ProfessionalScheduling.pdf"},
          ]
        },
        {
          category: "Coursework",
          links: [
            {title: "Community Resource Info Sheet PDF", url: "./pdfs/Coursework/CommunityResourceInfoSheet.pdf"},
            {title: "Making Time Priorities PDF", url: "./pdfs/Coursework/MakingTimePriorities.pdf"},
          ]
        },
        {
          category: "Athletic",
          links: [
            {title: "Overview PDF", url: "./pdfs/Athletic/Athletic.pdf"},
            {title: "Couch Potato PDF", url: "./pdfs/Athletic/couchPotato.pdf"},
          ]
        },
        {
          category: "Getting Around",
          links: [
            {title: "Driving Licenses PDF", url: "./pdfs/GettingAround/GettingAroundLicenses.pdf"},
            {title: "Modes of Transportation PDF", url: "./pdfs/GettingAround/GettingAroundModesOfTransportation.pdf"},
          ]
        },
        {
          category: "Hopes and Dreams",
          links: [
            {title: "Obstacles and Assets PDF", url: "./pdfs/HopesDreams/HopesAndDreamsObstaclesAssets.pdf"},
            {title: "Overview PDF", url: "./pdfs/HopesDreams/HopesDreams.pdf"},
          ]
        },
        {
          category: "Household",
          links: [
            {title: "Action Plan PDF", url: "./pdfs/Household/Household.pdf"},
            {title: "Dishwasher PDF", url: "./pdfs/Household/HouseholdDishwasher.pdf"},
            {title: "Meals PDF", url: "./pdfs/Household/HouseholdMeals.pdf"},
            {title: "Neatness PDF", url: "./pdfs/Household/HouseholdNeatness.pdf"},
          ]
        },
        {
          category: "Social",
          links: [
            {title: "Friendship PDF", url: "./pdfs/Social/FriendshipList.pdf"},
            {title: "Social Friendship Stages PDF", url: "./pdfs/Social/SocialFriendshipStages.pdf"},
            {title: "Social Media PDF", url: "./pdfs/Social/SocialUsingSocialMedia.pdf"},
          ]
        },
        {
          category: "Fun and Talents",
          links: [
            {title: "Overview PDF", url: "./pdfs/FunTalents/FunTalents.pdf"},
            {title: "Daily Timeline Worksheet PDF", url: "./pdfs/FunTalents/FunTalentsWorksheet.pdf"},
          ]
        },
        {
          category: "Wellness",
          links: [
            {title: "Areas of Wellness PDF", url: "./pdfs/Wellness/AreasOfWellness.pdf"},
            {title: "Handwashing PDF", url: "./pdfs/Wellness/WellnessHandwashing.pdf"},
            {title: "Medication PDF", url: "./pdfs/Wellness/WellnessMedication.pdf"},
          ]
        }
      ]
    };
	   this.firstItemToRead = React.createRef();
     this.categoriesFirstItemToRead = React.createRef();
     this.canPressCoursePDF = true;
  }

  openInNewTab = (url) => {
    var win = window.open(url, '_blank');
    win.focus();
  }

  handleKeyPress = (event) => {
  	  switch (event.keyCode)
	  {
		  case 81: //Q
			  if (!this.state.selectedCourseCategory)
          this.selectCategory('Professional');
			  break;
		  case 87: //W
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Coursework');
        break;
		  case 82: //R
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Getting Around');
        break;
		  case 84: //T
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Hopes and Dreams');
        break;
		  case 89: //Y
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Household');
        break;
		  case 85: //U
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Social');
        break;
		  case 73: //I
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Fun and Talents');
        break;
		  case 79: //O
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Wellness');
        break;
		  case 69: //E
        if (!this.state.selectedCourseCategory)
          this.selectCategory('Athletic');
        break;
		  case 27: // Escape
        if (this.state.selectedCourseCategory)
          this.setState({selectedCourseCategory: false});
			  break;
		  case 13: // Enter
			  break;
	  }
  }

  selectCategory = (category) => {
    this.setState({selectedCourseCategory: true, newCategoryText: category});
  }

	componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
	  var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
	  firstElement.focus();
  }

  componentDidUpdate() {
    if (this.state.selectedCourseCategory) {
      if (this.state.canPressCoursePDF === true) {
        var categoryFirstItem = ReactDOM.findDOMNode(this.categoriesFirstItemToRead.current);
    		categoryFirstItem.focus();
        this.state.canPressCoursePDF = false;
      }
    } else {
      var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
  	  firstElement.focus();
      this.state.canPressCoursePDF = true;
    }
  }

  render() {
    if (this.state.selectedCourseCategory) {
      return (
        <div className='container-override'>
          <h1 tabIndex='0' style={{fontSize: '24pt'}} ref={this.categoriesFirstItemToRead}>Category: {this.state.newCategoryText}</h1>
          {
            this.state.coursePDFs.filter(course => course.category === this.state.newCategoryText).map(c => {
              return (
                <div>
                  {
                    c.links.map(l => {
                      return (
                        <Button style={{backgroundColor: "#a8c9ff", color: 'black', display: 'block', margin: '0 auto', marginTop: 30,}} size="large" onClick={() => this.openInNewTab(l.url)}>
                          {l.title}
                        </Button>
                      )
                    })
                  }
                </div>
              )
            })
          }
          <Button style={{marginTop: 30, backgroundColor: "#F7B733", color: 'white'}} size="large" onClick={() => this.setState({selectedCourseCategory: false})}>
            Go back (Press Escape)
          </Button>
        </div>
      );
    } else {
      return (
        <div className='container-override'>
          <div style={{padding:25}} />
          <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Courses</h1>
          <Card.Group style={{marginLeft: 290}}>
          {
            this.state.courseCategories.map(c => {
              return <Card style={{backgroundColor: "#a8c9ff"}}>
                      <Image src={c.image} aria-hidden='true' style={{margin: '0 auto', marginTop: '20px', marginBottom: '20px', backgroundColor: "#a8c9ff"}} size='tiny' />
                      <Card.Content>
                        <Card.Header><Button style={{backgroundColor: "#4ABDAC", color: 'white',fontSize:fontSizeMultiplier*16}} onClick={() => this.selectCategory(c.name)}>{c.name}<br/>(Press {c.button})</Button></Card.Header>
                        <Card.Description style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{c.meta}</Card.Description>
                      </Card.Content>
                    </Card>
            })
          }
          </Card.Group>
        </div>
      );
    }
  }
}

export default CoursesContainer
