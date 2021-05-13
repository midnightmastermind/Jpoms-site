import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class ServicesPage extends Component {
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
        <div className="App-page Services-page">
          <div className="App-content">
              <div className="Page-header">Services</div>
              <div className="App-content-body">
              </div>
          </div>
        </div>
          )
    }
  }

export default ServicesPage;