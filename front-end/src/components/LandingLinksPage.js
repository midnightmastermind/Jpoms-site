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
					<div className="App-title">
      	             <img src={jpoms} className="App-logo" alt="logo" />
      	         	<h2>Josh Pomerenke</h2>
      				 <div className="titles"></div>
      	          </div>
      			  <div className="App-contact">
      					<div className="email">jtpomerenke@gmail.com</div>
      					<div className="phone">414-975-7542</div>
					</div>
      			  <div className="App-links">
						<Button color="inherit" component={ Link } to="/about">Enter Website</Button>
						<Button color="inherit" component={ Link } to="/about">Instagram</Button>
						<Button color="inherit" component={ Link } to="/about">Skoolie</Button>
						<Button color="inherit" component={ Link } to="/about">Facebook</Button>
						<Button color="inherit" component={ Link } to="/about">Twitter</Button>
						<Button color="inherit" component={ Link } to="/about">Github</Button>
					</div>
    			</div>
			  </div>
          </div>
        </div>
          )
    }
  }

export default LandingPage;