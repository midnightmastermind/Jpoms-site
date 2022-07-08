import React, { Component } from 'react';
import { Link } from "react-router-dom";
import jpoms from '../jpoms.png';
import { faHome, faBus, faPhone, faEnvelope, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tsParticles } from "tsparticles";

//import Loading from './Loading';
//import PropTypes from 'prop-types';

class ErrorPage extends Component {
   constructor() {
      super();
    }

    render() {
      return (
        <div className="LandingLinks-page">
          <div className="App-content">
              <div className="App-splashscreen">
              	<div className="App-welcomescreen">
                  <div className="Error-page">
                    ERROR 404
                  </div>
          			</div>
        		  </div>
            </div>
          </div>
         )
    }
  }

export default ErrorPage;
