import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class CatsPage extends Component {
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
        <div className="App-page Cats-page">
          <div className="App-content">
              <div className="Page-header">Cats</div>
              <div className="App-content-body">
              </div>
          </div>
        </div>
          )
    }
  }

export default CatsPage;