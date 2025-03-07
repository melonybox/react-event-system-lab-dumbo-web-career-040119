// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusEvent = () => console.log('Good!')

  blurEvent = () => console.log('Hey! Eyes on me!')

  render(){
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}>
        Eyes on me, please!
      </button>
    )
  }
}
