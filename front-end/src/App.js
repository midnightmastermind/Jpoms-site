import React, { Component } from 'react';
import './App.css';

import { fetchHistory } from "./actions/historyActions";

import { Provider } from "react-redux";
import store from "./store";

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
import Particles from "react-tsparticles";

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Provider store={store}>
    <div className="App">
      <div style={{backgroundColor: "#333"}}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#222",
            },
          },
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
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
};

export default App;
