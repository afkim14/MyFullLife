import React, { Component, Text } from 'react';
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

import { canUseNumberKeys, enableNumberKeys, disableNumberKeys } from '../App.js';

class JournalContainer extends Component {
  constructor() {
    super();
    this.state = {
      newEntry: false,
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
      newEntries.push({title: this.state.title, description: this.state.description, type: "text", date: "02/20/2019"});
    }
    enableNumberKeys();
    this.setState({newEntry: false});
  }

  render() {
    if (this.state.newEntry) {
      return (
        <div style={{fontFamily:'Comfortaa', textAlign: 'center', height: '100vh', background: 'radial-gradient(circle, rgba(56,195,204,1) 0%, rgba(0,212,255,1) 100%)'}}>
		  <div style={{padding:25}} />
          <h2 style={{textAlign: 'center'}}>New Journal Entry</h2>
		  <Button style={{marginTop: 30}} size="large" icon labelPosition='left' onClick={() => { enableNumberKeys(); this.setState({newEntry: false});}}>
              <Icon name='cancel' />
              Discard Entry
		  </Button>
	  	  <div style={{padding:5}} />
          <Input onChange={this.updateTitle} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Title' />
          <Form>
            <TextArea onChange={this.updateDescription} style={{width: 600, height: 300}} placeholder='Description' />
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
            <Button style={{marginTop: 30}} size="large" icon labelPosition='left' onClick={() => this.submitEntry()}>
              <Icon name='upload' />
              Submit
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
            <Header as='h2' style={{textAlign: 'center'}}>Journal</Header>
            <Button icon labelPosition='left' onClick={() => { disableNumberKeys(); this.setState({newEntry: true});}}>
              <Icon name='file alternate' />
              New Entry
            </Button>
            <Table basic='very' celled collapsing style={{width: 900, margin: "0 auto", marginTop: 20, backgroundColor:'lightGrey', padding:10}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Journal Entries</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.entries.map(e => {
                    return <Table.Row>
                              <Table.Cell>
                                <Header as='h4' image>
                                  {e.type == "text" &&
                                    <Image src='./icons/text-document.png' rounded size='mini' />
                                  }
                                  {e.type == "image" &&
                                    <Image src='./icons/camera-open.png' rounded size='mini' />
                                  }
                                  {e.type == "video" &&
                                    <Image src='./icons/video.png' rounded size='mini' />
                                  }
                                  {e.type == "voice" &&
                                    <Image src='./icons/mic-open.png' rounded size='mini' />
                                  }
                                  <Header.Content>
                                    <a href="">{e.title}</a>
                                    <Header.Subheader>{e.type}</Header.Subheader>
                                  </Header.Content>
                                </Header>
                              </Table.Cell>
                              <Table.Cell>{e.date}</Table.Cell>
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
