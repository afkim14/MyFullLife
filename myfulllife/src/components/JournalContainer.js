import React, { Component, Text } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Image,
  Header,
  Input,
  Table,
  Button,
  Icon,
  Form,
  TextArea
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';
import {fontSizeMultiplier} from '../App.js';
import { canUseNumberKeys, enableNumberKeys, disableNumberKeys } from '../App.js';

class JournalContainer extends Component {
  constructor() {
    super();
    this.state = {
      newEntry: false,
      newJournalComplete: false,
      altView: false,
      entries: [
        {title: "My Trip to The Mall", type: "text", date: "02/16/2019"},
        {title: "Playing Basketball", type: "video", date: "02/5/2019"},
        {title: "My Talent Show Audition", type: "voice", date: "1/22/2019"},
        {title: "Making Dinner", type: "image", date: "1/4/2019"}
      ],

      // new entry
      title: "",
      description: "",
      image: "",
      video: "",
      voice: ""
    };
    this.firstItemToRead = React.createRef();
    this.newEntryFirstItemToRead = React.createRef();
    this.newJournalCompleteFirstToRead = React.createRef();
    this.canUpdateNewJournal = true;
  }

  updateTitle = (evt) => {
    this.setState({title: evt.target.value});
  }

  updateDescription = (evt) => {
    this.setState({description: evt.target.value});
  }

  submitEntry = () => {
    var newEntries = this.state.entries;
    if (this.state.title != "") {
      newEntries.unshift({title: this.state.title, description: this.state.description, type: "text", date: "02/20/2019"});
    }
    enableNumberKeys();
    this.setState({newEntry: false, newJournalComplete: true});
  }

  handleKeyPress = (event) => {
    switch (event.keyCode)
    {
      case 81: //Q
        if (!this.state.newEntry) {
          this.setState({newEntry: true});
          disableNumberKeys();
        }
        break;
      case 27: // Escape
        if (this.state.newEntry) {
          this.setState({newEntry: false});
          enableNumberKeys();
        }
        break;
      case 13: // Enter
		if (event.shiftKey)
		{
        	if (this.state.newEntry)
          		this.submitEntry();
		}
        break;
    }
  }

  componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
	  var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
	  firstElement.focus();
  }

  componentDidUpdate() {
    if (this.state.newEntry) {
      if (this.canUpdateNewJournal===true)
  		{
  			var newEntryFirstItem = ReactDOM.findDOMNode(this.newEntryFirstItemToRead.current);
  			newEntryFirstItem.focus();
  			this.canUpdateNewJournal=false;
  		}
    } else if (this.state.newJournalComplete) {
      var firstElement=ReactDOM.findDOMNode(this.newJournalCompleteFirstToRead.current);
      firstElement.focus();
      this.canUpdateNewJournal=false;
    } else {
      var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
  	  firstElement.focus();
      this.canUpdateNewJournal=true;
    }
  }

  render() {
    if (this.state.newEntry) {
      return (
        <div style={{fontFamily:'Comfortaa', textAlign: 'center', height: '100vh'}}>
	        <div style={{padding:25}} />
          <h1 tabIndex='0' ref={this.newEntryFirstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>New Journal</h1>
	  	  <div style={{padding:5}} />
          <Input onChange={this.updateTitle} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Title' />
          <Form>
            <TextArea onChange={this.updateDescription} style={{width: 600, height: 300}} focus placeholder='Description' />
          </Form>
          <div style={{marginTop: 10}}>
            <Button onClick={() => { enableNumberKeys(); this.setState({newEntry: false});}}>
              <Image style={{float: "left"}} src='./icons/camera-open.png' rounded size='mini' />
              Photo
            </Button>
            <Button onClick={() => { enableNumberKeys(); this.setState({newEntry: false});}}>
              <Image style={{float: "left"}} src='./icons/video.png' rounded size='mini' />
              Video
            </Button>
            <Button onClick={() => { enableNumberKeys(); this.setState({newEntry: false});}}>
              <Image style={{float: "left"}} src='./icons/mic-open.png' rounded size='mini' />
              Voice
            </Button>
            <br></br>
            <Button style={{marginTop: 30, backgroundColor: "#FC4A1A", color: 'white'}} size="large" icon labelPosition='left' onClick={() => { enableNumberKeys(); this.setState({newEntry: false});}}>
              <Icon name='cancel' />
              Discard Entry (Press Escape)
            </Button>
            <Button style={{marginTop: 30, backgroundColor: "#2770f7", color: 'white'}} size="large" icon labelPosition='left' onClick={() => this.submitEntry()}>
              <Icon name='upload' />
              Submit (Press Shift + Enter)
            </Button>
          </div>
        </div>
      );
    } else {
      if (this.state.altView) {
        return (
          <Container style={{textAlign: 'center'}}>

          </Container>
        );
      } else {
        return (
          <div className='container-override'>
		         <div style={{padding:25}} />
            <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Journal</h1>
            <Button size='huge' style={{backgroundColor: "#2770f7", color: 'white'}} icon labelPosition='left' onClick={() => { disableNumberKeys(); this.setState({newEntry: true});}}>
              <Icon name='file alternate' />
              New Entry (Press Q)
            </Button>
            <Table basic='very' celled collapsing style={{width: 900, margin: "0 auto", marginTop: 20, backgroundColor:'#a8c9ff', padding:10}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Journal Entries</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.entries.map((e, i) => {
                    return <Table.Row key={i}>
                              <Table.Cell>
                                <Header as='h4' image>
                                  {e.type == "text" &&
                                    <Image aria-hidden='true' src='./icons/text-document.png' rounded size='mini' />
                                  }
                                  {e.type == "image" &&
                                    <Image aria-hidden='true' src='./icons/camera-open.png' rounded size='mini' />
                                  }
                                  {e.type == "video" &&
                                    <Image aria-hidden='true' src='./icons/video.png' rounded size='mini' />
                                  }
                                  {e.type == "voice" &&
                                    <Image aria-hidden='true' src='./icons/mic-open.png' rounded size='mini' />
                                  }
                                  <Header.Content>
                                    {i==0 ?
                                      <a tabIndex='0' ref={this.newJournalCompleteFirstToRead} style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}} href="">{this.state.newJournalComplete ? "New Journal: " + e.title : e.title}</a>
                                      :
                                      <a style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}} href="">{e.title}</a>
                                    }
                                    <Header.Subheader>{e.type}</Header.Subheader>
                                  </Header.Content>
                                </Header>
                              </Table.Cell>
                              <Table.Cell style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{e.date}</Table.Cell>
                            </Table.Row>
                })}
              </Table.Body>
            </Table>
          </div>
        );
      }
    }
  }
}

export default JournalContainer
