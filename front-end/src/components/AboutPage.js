import React, { Component } from 'react';
import jpoms from '../jpoms.jpg';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import Loading from './Loading';
//import PropTypes from 'prop-types';

class AboutPage extends Component {
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
        <div className="App-page About-page">
          <div className="App-content">
            <div className="Page-header">About Me</div>
              <div className="App-content-body">
                <div className="App-content-section">
                    Welcome to jpoms.com, home of all things Josh Pomerenke. Honestly, this entire site is pretty much a giant about me section so I'll keep this short and sweet.
                </div>
                <div className="profile-card">
                  <img src={jpoms} className="profile-card-image"/>
                  <div className="profile-card-info">
                    <div className="profile-card-info-section"><div className="bold-title">Name:</div><div>Joshua Pomerenke</div></div>
                    <div className="profile-card-info-section"><div className="bold-title">Aliases:</div><div>Josh Poms, Pomeranian, Pomegranate, Pomsicle, Pomeroni, Pommy, Poms</div></div>
                    <div className="profile-card-info-section"><div className="bold-title">Occupation:</div><div>Wanderer, Web Developer</div></div>
                    <div className="profile-card-info-section"><div className="bold-title">DoB:</div><div>4/30/1991</div></div>
                    <div className="profile-card-info-section"><div className="bold-title">AA-DoB:</div><div>12/26/2020</div></div>
                    <div className="profile-card-info-interests-section"><div className="bold-title">Interests/Passions:</div>
                    <div className="profile-card-info-interests">
                      <div>Computer Science</div>
                      <div>Martial Arts - Northern Shaolin Kung Fu</div>
                      <div>Alcoholics Anonymous</div>
                      <div>Stoicism</div>
                      <div>Technology</div>
                      <div>Skoolie / Off Grid Living</div>
                      <div>VR/AR/UI</div>
                      <div>Mental Health</div>
                      <div>Writing</div>
                      <div>Philosophy</div>
                      <div>Organizational Structures</div>
                      <div>Mindfulness Meditation</div>
                      <div>Buddhism</div>
                      <div>Spirtituality</div>
                      <div>Lion Dance</div>
                      <div>Taoism</div>
                      <div>Stand Up Comedy</div>
                      <div>Reading</div>
                      <div>Movies</div>
                      <div>Series</div>
                      <div>Podcasts</div>
                      <div>Hacking the Day</div>
                      <div>Getting Lost</div>
                      <div>Letting Go</div>
                      <div>Nature</div>
                      <div>Time & Space Travel</div>
                      <div>Open-Mindedness</div>
                      <div>Stories/Adventures</div>
                      <div>Thinking</div>
                      <div>Dan Harmon</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="App-content-section">
                <div className="bold-title">Who I am:</div>
                <div className="margin-left">
                All I know is that I am Human. Nothing less, nothing more. More importantly, I'm just one of many. You are me and I am you. That's all, that's everything I want to be and that's what I am.
                </div>
              </div>
              <div className="App-content-section">
                <div className="bold-title">Who I strive to be:</div>
                <div className="margin-left">
                  kind-hearted, generous, patient, forgiving, caring, understanding, positive, serendipitous, open-minded, empathetic, and most of all loving.
                </div>
              </div>
              <div className="App-content-section">I owe this change in perspective to every one of you out there. Every human I have ever ran into. Thank you for helping me find myself.
              </div>
              <div className="App-content-section">
                peace, love, and all that jazz,
              </div>
              <div className="App-content-section">
                Josh Pomerenke
              </div>
              <div className="App-content-section-contacts">
                <div><a href="tel:414-975-7542"><FontAwesomeIcon icon={faPhone} />414-975-7542</a></div>
                <div><a href="mailto:josh@jpoms.com"><FontAwesomeIcon icon={faEnvelope} />josh@jpoms.com</a></div>
                <div><a href="https://www.facebook.com/joshpoms"><FontAwesomeIcon icon={faFacebookF}/>Josh Poms</a></div>
                <div><a href="https://www.instagram.com/joshpoms"><FontAwesomeIcon icon={faInstagram}/>Josh Poms</a></div>
                <div><a href="https://www.twitter.com/joshpoms"><FontAwesomeIcon icon={faTwitter}/>Josh Poms</a></div>
                <div><a href="https://github.com/midnightmastermind"><FontAwesomeIcon icon={faGithub}/>MM</a></div>
              </div>
            </div>
          </div>
        </div>
          )
    }
  }

export default AboutPage;