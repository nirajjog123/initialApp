import React, { Component } from 'react';


export default class title extends Component {
//   getVal(value){
// return console.log("its" +(value +1));
//   };
  render() {
    return (
        <h1>{this.props.title}</h1>
    );
  }
}
