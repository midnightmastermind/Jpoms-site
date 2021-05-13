import React, { Component } from 'react';
import loading_icon from '../images/loading_icon.gif';

class Loading extends Component {
  render() {
    return (
      <div className="App-page Loading-page">
	  	<div>Loading</div>
        <img src={loading_icon} />
	  </div>
        )
      }
}

export default Loading;
