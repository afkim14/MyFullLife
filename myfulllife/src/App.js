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
		
export var fontSizeMultiplier = 1;
		
export function updateFontSizeMultiplier(num) {
	fontSizeMultiplier = num;
}

export function enableNumberKeys() {
	canUseNumberKeys=true;
}

export function disableNumberKeys() {
	canUseNumberKeys=false;
}

export default App;
