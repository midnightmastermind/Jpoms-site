import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class SocialPage extends Component {
   constructor() {
      super();

      this.state = {
  	    loading: true
      }
    }

    render() {
		//if (this.state.loading) {
			//return (<Loading />);
		//}
     
      return (
        <div className="App-page Social-page">
          <div className="App-content">
              <div className="Page-header">Social</div>
              <div className="App-content-body">
              </div>
          </div>
        </div>
          )
    }
  }

export default SocialPage;