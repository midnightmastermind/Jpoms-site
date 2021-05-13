import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class HistoryPage extends Component {
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
        <div className="App-page History-page">
          <div className="App-content">
              <div className="Page-header">History</div>
              <div className="App-content-body">
              	<div className="App-content-filters-container">
              	</div>
              	<div className="App-content-with-filters-container">
              		<div className="History-container">
              		</div>
              	</div>
              	<div className="History-projects-container">
              	</div>
              </div>
          </div>
        </div>
          )
    }
  }

export default HistoryPage;