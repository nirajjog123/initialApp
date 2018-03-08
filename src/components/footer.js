import React, { Component } from 'react';


export default class footer extends Component {

  render() {
    return (<div>
        <ul>{this.props.userArray.map((listData,i)=><li key={i}>
        <input type="radio" name="radiobutn" value={listData} />
        {listData}</li>)}</ul>
        <footer></footer>
        </div>
    );
  }
}

//export default App;