import React, { Component } from 'react';
import { Link } from "react-router-dom";
import jpoms from '../jpoms.png';
import { faHome, faBus, faPhone, faEnvelope, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tsParticles } from "tsparticles";

//import Loading from './Loading';
//import PropTypes from 'prop-types';

class LandingLinksPage extends Component {
   constructor() {
      super();

      this.state = {
  	    site: 'https://jpoms.com/login',
        httpd_username: "",
        httpd_password: "",
        allowedRedirects: ["movie","tv","plex","download"]
      }
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
      //alert('Your favorite flavor is: ' + this.state.userName);
      //event.preventDefault();
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    componentDidMount() {
      let queryString = window.location.search;
      console.log(window.location);
      if (queryString) {
        queryString = queryString.substring(1);
        if(this.state.allowedRedirects.includes(queryString)) {
          this.setState({
            site: "https://" + queryString + '.jpoms.com/logincheck'
          });
        }
      }
    }

    render() {
      return (
        <div className="LandingLinks-page">
          <div className="App-content">
              <div className="App-splashscreen">
              	<div className="App-welcomescreen">
                  <div className="Login-info">
                    <div className="loginForm">
                      <form action={this.state.site} method='post' id="myForm">
                          <div className="img-container">
                            <img />
                          </div>
                          <div className='form-group'>
                              <label htmlFor='httpd_username'>Username</label>
                              <input id='http_username' className='form-control' type='text' name='httpd_username' onChange={this.handleInputChange} value={this.state.httpd_username}/>
                          </div>
                          <div className='form-group'>
                              <label htmlFor='httpd_password'>Password</label>
                              <input id='httpd_password' className='form-control' type='password' name='httpd_password' onChange={this.handleInputChange} value={this.state.httpd_password}/>
                          </div>
                          <div className='form-group'>
                              <input className='btn btn-success' type='submit' name='login' value='Login' readOnly />
                          </div>
                      </form>
                    </div>
          		    </div>
          			</div>
        		  </div>
            </div>
          </div>
         )
    }
  }

export default LandingLinksPage;
