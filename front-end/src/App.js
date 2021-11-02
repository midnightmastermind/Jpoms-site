import React, { Component } from 'react';
import './App.css';

import { fetchHistory } from "./actions/historyActions";

import { Provider } from "react-redux";
import store from "./store";
import Particles from 'react-particles-js';

import MenuHeader from './components/MenuHeader';
import LandingPage from './components/LandingPage';
import LandingLinksPage from './components/LandingLinksPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage';
import InterestsPage from './components/InterestsPage'
import HistoryPage from './components/HistoryPage';
import CatsPage from './components/CatsPage';
import ProjectZenoPage from './components/ProjectZenoPage';
import JessicaPage from './components/JessicaPage';
import SocialPage from './components/SocialPage';
import { Route, Switch, useLocation } from 'react-router-dom';


class App extends Component {
    	constructor(props) {
          super(props);
        }
  render() {
    return (
    	<Provider store={store}>
      <div className="App">
        <div style={{backgroundColor: "#333"}}>
          <Particles
          height="100vh"
          width="100%"
          params={{
             particles: {
               number: {
                 value: 100
               },
               size: {
                 value: 5
               }
             }
           }}
            />
          </div>
        <div className="App-pages">
          <Switch>
             {/*<Route path="/about" component={ AboutPage } />
    		     <Route path="/blog" component={ BlogPage } />
    		     <Route path="/services" component={ ServicesPage } />
    		     <Route path="/history" component={ HistoryPage } />
             <Route path="/interests" component={ InterestsPage } />
    		     <Route path="/cats" component={ CatsPage } />
    		     <Route path="/projectzeno" component={ ProjectZenoPage } />
    		     <Route path="/jessica" component={ JessicaPage } />
    		     <Route path="/social" component={ SocialPage } />*/}
    		     <Route exact path="/" component={ LandingLinksPage } />
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
