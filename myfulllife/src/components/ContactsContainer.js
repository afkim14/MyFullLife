import React, { Component, Text } from 'react';
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
          <Header as='h2' style={{textAlign: 'center'}}>Contacts</Header>
          <Input onChange={this.updateName} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Name' />
          <Input onChange={this.updatePhone} style={{marginBottom: 10, width: 600}} size='large' focus placeholder='Phone Number' />
          <div style={{marginTop: 10}}>
            <Button style={{backgroundColor: "#F7B733", color: 'white', marginTop: 30}} size="large" icon labelPosition='left' onClick={() => this.submitContact()}>
              <Icon name='upload' />
              Add New Contact
            </Button>
			<Button style={{marginTop: 30}} size="large" icon labelPosition='left' onClick={() => {enableNumberKeys(); this.setState({newEntry: false})}}>
              <Icon name='cancel' />
              Cancel
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-override'>
		  <div style={{padding: 25}} />
          <Header as='h2' style={{textAlign: 'center'}}>Contacts</Header>
          <Button style={{backgroundColor: "#F7B733", color: 'white'}}  icon labelPosition='left' onClick={() => {disableNumberKeys(); this.setState({newEntry: true})}}>
            <Icon name='file alternate' />
            New Contact
          </Button>
          <Table basic='very' celled collapsing style={{width: 900, backgroundColor:'#4ABDAC', padding: 10, margin: "0 auto", marginTop: 20}}>
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
                                <Image src='./icons/contacts.png' rounded size='mini' />
                                <Header.Content>
                                  <a href="">{c.name}</a>
                                </Header.Content>
                              </Header>
                            </Table.Cell>
                            <Table.Cell>{c.phone}</Table.Cell>
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
