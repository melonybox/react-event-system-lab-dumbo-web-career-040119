// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  inputPassword = () => console.log('Entering password...')
  
  render(){
    return(
      <input onKeyUp={this.inputPassword}type= "password"/>
    )
  }
}
