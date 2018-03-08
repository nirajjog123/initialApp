import React, { Component } from 'react';
import Title from "./Header/title";


export default class header extends Component {
//   getVal(value){
// return console.log("its" +(value +1));
//   };
  render() {
    
    return (
       <div>
        <Title title={this.props.title}/>
       </div>
    );
  }
}

//export default App;
