import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class LandingPage extends Component {
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
        <div className="App-page Landing-page">
          <div className="App-content">
              <div className="App-splashscreen">
              	<div className="App-welcomescreen">
    				<h2>Welcome!</h2>
   				 To JPoms.com
    				<Button color="inherit" component={ Link } to="/about">enter</Button>
    			</div>
			  </div>
          </div>
        </div>
          )
    }
  }

export default LandingPage;