import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import jpoms from '../jpoms3.jpg';
import { faHome, faBus, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class LandingLinksPage extends Component {
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
        <div className="App-page LandingLinks-page">
          <div className="App-content">
              <div className="App-splashscreen">
              	<div className="App-welcomescreen">
        					<div className="Landing-title">
                     <img src={jpoms} className="App-logo" alt="logo" />
        	         	  <h2>Josh Pomerenke</h2>
            				 <div className="titles">
            				  <div>Full Stack Web Developer</div>
            				  <div>Stoic / AA Member</div>
            				  <div>Martial Artist</div>
            				  <div>Aspiring Renaissnce Man</div>
            				  <div>Skoolie Owner</div>
            				 </div>
                  </div>
          			  <div className="Landing-contact">
          					<div>
          					  <a href="tel:414-975-7542"><FontAwesomeIcon icon={faPhone} />414-975-7542</a>
          				  </div>
                    <div><a href="mailto:josh@jpoms.com"><FontAwesomeIcon icon={faEnvelope} />josh@jpoms.com</a></div>
        					</div>
          			  <div className="Landing-links">
        						<a className="Landing-link" color="inherit" href="/about"><FontAwesomeIcon className="icon" icon={faHome}/>Enter Website</a>
        						<a className="Landing-link" color="inherit" href="https://www.instagram.com/joshpoms"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
        						<a className="Landing-link" color="inherit" href="http://rainbowconnectionbus.com"><FontAwesomeIcon className="icon" icon={faBus}/>Skoolie</a>
        						<a className="Landing-link" color="inherit" href="https://www.facebook.com/joshpoms"><FontAwesomeIcon className="icon" icon={faFacebookF}/>Facebook</a>
        						<a className="Landing-link" color="inherit" href="https://www.twitter.com/joshpoms"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
        						<a className="Landing-link" color="inherit" href="https://github.com/midnightmasterminds"><FontAwesomeIcon   className="icon" icon={faGithub}/>Github</a>
        					</div>
          			</div>
        		  </div>
            </div>
          </div>
         )
    }
  }

export default LandingLinksPage;