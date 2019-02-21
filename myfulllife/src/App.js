import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen';

class App extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}
		
export var canUseNumberKeys = true;

export function enableNumberKeys() {
	canUseNumberKeys=true;
}

export function disableNumberKeys() {
	canUseNumberKeys=false;
}

export default App;
