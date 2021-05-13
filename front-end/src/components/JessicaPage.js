import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class JessicaPage extends Component {
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
        <div className="App-page Jessica-page">
          <div className="App-content">
              <div className="Page-header">Jessica</div>
              <div className="App-content-body">
              </div>
          </div>
        </div>
          )
    }
  }

export default JessicaPage;