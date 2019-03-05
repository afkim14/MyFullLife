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
  Form
} from 'semantic-ui-react'
import PointsContainer from './PointsContainer';
import {fontSizeMultiplier} from '../App.js';
import { canUseNumberKeys, enableNumberKeys, disableNumberKeys } from '../App.js';

class ContactsContainer extends Component {
  constructor() {
    super();
    this.state = {
      newEntry: false,
      contacts: [
        {name: "John Doe", phone: "(000) 111-2222"},
        {name: "John Doe", phone: "(000) 111-2222"},
        {name: "John Doe", phone: "(000) 111-2222"},
        {name: "John Doe", phone: "(000) 111-2222"},
      ],
      name: "",
      phone: ""
    };
  	this.firstItemToRead = React.createRef();
    this.newEntryFirstItemToRead = React.createRef();
    this.canUpdateNewContact = true;
  }

  handleKeyPress = (event) => {
    switch (event.keyCode)
    {
      case 81: //Q
        if (!this.state.newEntry)
          this.setState({newEntry: true});
        break;
      case 27: // Escape
        if (this.state.newEntry)
          this.setState({newEntry: false});
        break;
      case 13: // Enter
        if (this.state.newEntry)
          this.submitContact();
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
      if (this.canUpdateNewContact===true)
  		{
  			var newEntryFirstItem = ReactDOM.findDOMNode(this.newEntryFirstItemToRead.current);
  			newEntryFirstItem.focus();
  			this.canUpdateNewContact=false;
  		}
    } else {
      var firstElement=ReactDOM.findDOMNode(this.firstItemToRead.current);
  	  firstElement.focus();
      this.canUpdateNewContact=true;
    }
  }

  updateName = (evt) => {
    this.setState({name: evt.target.value});
  }

  updatePhone = (evt) => {
    this.setState({phone: evt.target.value});
  }

  submitContact = () => {
    var newEntries = this.state.contacts;
    if (this.state.name != "") {
      newEntries.push({name: this.state.name, phone: this.state.phone});
    }
	enableNumberKeys();
    this.setState({newEntry: false});
  }

  render() {
    if (this.state.newEntry) {
      return(
        <div className='container-override'>
		  <div style={{padding: 25}} />
          <h1 tabIndex='0' ref={this.newEntryFirstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>New Contact</h1>
          <Input onChange={this.updateName} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Name' />
          <Input onChange={this.updatePhone} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Phone Number' />
          <div style={{marginTop: 10}}>
              <Button style={{backgroundColor: "#FC4A1A", color: 'white', marginTop: 30}} size="large" icon labelPosition='left' onClick={() => {enableNumberKeys(); this.setState({newEntry: false})}}>
                <Icon name='cancel' />
                Cancel (Press Escape)
              </Button>
            <Button style={{backgroundColor: "#F7B733", color: 'white', marginTop: 30}} size="large" icon labelPosition='left' onClick={() => this.submitContact()}>
              <Icon name='upload' />
              Add New Contact (Press Enter)
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-override'>
		  <div style={{padding: 25}} />
          <h1 tabIndex='0' ref={this.firstItemToRead} style={{fontFamily:'Comfortaa', margin:'0', fontSize:'36pt'}}>Contacts</h1>
          <Button size='huge' style={{backgroundColor: "#F7B733", color: 'white'}}  icon labelPosition='left' onClick={() => {disableNumberKeys(); this.setState({newEntry: true})}}>
            <Icon name='file alternate' />
            New Contact (Press Q)
          </Button>
          <Table basic='very' celled collapsing style={{width: 900, backgroundColor:'#a8c9ff', padding: 10, margin: "0 auto", marginTop: 20}}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.contacts.map(c => {
                  return <Table.Row>
                            <Table.Cell>
                              <Header as='h4' image>
                                <Image aria-hidden='true' src='./icons/contacts.png' rounded size='mini' />
                                <Header.Content>
                                  <a style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}} href="">{c.name}</a>
                                </Header.Content>
                              </Header>
                            </Table.Cell>
                            <Table.Cell style={{fontFamily:'Comfortaa', fontSize:fontSizeMultiplier*16}}>{c.phone}</Table.Cell>
                          </Table.Row>
              })}
            </Table.Body>
          </Table>
        </div>
      );
    }
  }
}

export default ContactsContainer
