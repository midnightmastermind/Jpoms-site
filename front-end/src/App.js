import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import { fetchHistory } from "./actions/historyActions";

import { Provider } from "react-redux";
import store from "./store";

import MenuHeader from './components/MenuHeader';
import LandingPage from './components/LandingPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage';
import InterestsPage from './components/InterestsPage'
import HistoryPage from './components/HistoryPage';
import CatsPage from './components/CatsPage';
import ProjectZenoPage from './components/ProjectZenoPage';
import JessicaPage from './components/JessicaPage';
import SocialPage from './components/SocialPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    	constructor(props) {
          super(props);
          this.state = {
    		  width: window.innerWidth
    	  }
        }
 	componentWillMount() {
	 	  window.addEventListener('resize', this.handleWindowSizeChange);
	 }

	 componentWillUnmount() {
	 	window.removeEventListener('resize', this.handleWindowSizeChange);
	  }
	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};
  render() {
    const { width } = this.state;
	const isMobile = width <= 775;
    return (
    	<Provider store={store}>
      <div className="App">
        <div className="App-header-container">
            <MenuHeader isMobile={isMobile}/>
        </div>
        <div className="App-pages">
          <Switch>
             <Route path="/about" component={ AboutPage } />
		     <Route path="/blog" component={ BlogPage } />
		     <Route path="/services" component={ ServicesPage } />
		     <Route path="/history" component={ HistoryPage } />
             <Route path="/interests" component={ InterestsPage } />
		     <Route path="/cats" component={ CatsPage } />
		     <Route path="/projectzeno" component={ ProjectZenoPage } />
		     <Route path="/jessica" component={ JessicaPage } />
		     <Route path="/social" component={ SocialPage } />
		     <Route exact path="/" component={ LandingPage } />
		  </Switch>
        </div>
        <div className="divider"></div>
        <div className="footer">jpoms.com | creater: Josh Pomerenke</div>
      </div>
      </Provider>
    );
  }
}

export default App;
