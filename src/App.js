import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header"
import Footer from "../src/components/footer"

export default class App extends Component {


constructor(){
  super();
  this.state={
    title :"welcome title first",
    arrayList:[]
  }
}
addItem(event)
{
  
if(event.charCode == 13){

var newArray = this.state.arrayList;
  newArray.push(event.target.value)
  this.setState({arrayList:newArray});

  console.log(this.state.arrayList,"in the addItem");
}
}
  render() {
    
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <Header title={"other title"}/>
        <input placeholder="what u want to do?"onKeyPress={this.addItem.bind(this)} />
        <Footer name="Niraj"  userArray={this.state.arrayList} />
        
      </div>
    );
  }
}

//export default App;
