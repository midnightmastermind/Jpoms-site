import React, { Component } from 'react';
import loading_icon from '../jplogo.png';

class Loading extends Component {
  render() {
    return (
      <div className="App-page Loading-page">
        <img className="loading-icon" src={loading_icon} />
	    </div>
        )
      }
}

export default Loading;
